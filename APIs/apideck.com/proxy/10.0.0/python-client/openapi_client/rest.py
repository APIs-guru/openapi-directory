# coding: utf-8

"""
    Proxy API

    Welcome to the Proxy API.  You can use this API to access all Proxy API endpoints.  ## Base URL  The base URL for all API requests is `https://unify.apideck.com`  ## Headers  Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.  | Name                               | Type   | Required | Description | | ---------------------------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | | Authorization                      | String | Yes      | Bearer API KEY | | x-apideck-app-id                   | String | Yes      | The application id of your Unify application. Available at https://app.apideck.com/unify/api-keys. | | x-apideck-consumer-id              | String | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app.                       | | x-apideck-downstream-url           | String | Yes      | Downstream URL to forward the request too | | x-apideck-downstream-authorization | String | No       | Downstream authorization header. This will skip the Vault token injection. | | x-apideck-downstream-method        | String | No       | Downstream method. If not provided the upstream method will be inherited, depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT. | | x-apideck-service-id               | String | No       | Describe the service you want to call (e.g., pipedrive). Only needed when a customer has activated multiple integrations for the same Unified API.                                   |  ## Authorization  You can interact with the API through the authorization methods below.  ### apiKey  To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. To change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app. Your Apideck application_id can also be found on the same page.  Authenticate your API requests by including your test or live secret API key in the request header.  - Bearer authorization header: Authorization: Bearer <your-apideck-api-key> - Application id header: x-apideck-app-id: <your-apideck-app-id>   You should use the public keys on the SDKs and the secret keys to authenticate API requests.  **Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.  Learn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key  Go to Unify to grab your API KEY https://app.apideck.com/unify/api-keys  | Security Scheme Type      | HTTP   | | ------------------------- | ------ | | HTTP Authorization Scheme | bearer |  ### applicationId  The ID of your Unify application  | Security Scheme Type  | API Key          | | --------------------- | ---------------- | | Header parameter name | x-apideck-app-id |  ## Static IP  Some of the APIs you want to use can require a static IP. Apideck's static IP feature allows you to the Proxy API with a fixed IP avoiding the need for you to set up your own infrastructure. This feature is currently available to all Apideck customers. To use this feature, the API Vendor will need to whitelist the associated static IP addresses. The provided static IP addresses are fixed to their specified region and shared by all customers who use this feature.  - EU Central 1: **18.197.244.247** - Other: upcoming    More info about our data security can be found at [https://compliance.apideck.com/](https://compliance.apideck.com/)  ## Limitations  ### Timeout  The request timeout is set at 30 seconds.  ### Response Size  The Proxy API has no response size limit. For responses larger than 2MB, the Proxy API will redirect to a temporary URL. In this case the usual Apideck response headers will be returned in the redirect response. Most HTTP clients will handle this redirect automatically.  ``` GET /proxy < 301 Moved Permanently < x-apideck-request-id: {{requestId}} < Location: {{temporaryUrl}}  GET {{temporaryUrl}} < {{responseBody}} ```  ## SDKs and API Clients  Upcoming. [Request the SDK of your choice](https://integrations.apideck.com/request).  ## Errors  The API returns standard HTTP response codes to indicate success or failure of the API requests. For errors, we also return a customized error message inside the JSON response. You can see the returned HTTP status codes below.  | Code | Title                | Description | | ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | 200  | OK                   | The request message has been successfully processed, and it has produced a response. The response message varies, depending on the request method and the requested data.                                | | 201  | Created              | The request has been fulfilled and has resulted in one or more new resources being created. | | 204  | No Content           | The server has successfully fulfilled the request and that there is no additional content to send in the response payload body. | | 400  | Bad Request          | The receiving server cannot understand the request because of malformed syntax. Do not repeat the request without first modifying it; check the request for errors, fix them and then retry the request. | | 401  | Unauthorized         | The request has not been applied because it lacks valid authentication credentials for the target resource. | | 402  | Payment Required     | Subscription data is incomplete or out of date. You'll need to provide payment details to continue. | | 403  | Forbidden            | You do not have the appropriate user rights to access the request. Do not repeat the request. | | 404  | Not Found            | The origin server did not find a current representation for the target resource or is not willing to disclose that one exists. | | 409  | Conflict             | The request could not be completed due to a conflict with the current state of the target resource. | | 422  | Unprocessable Entity | The server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.                                     | | 429  | Too Many Requests    | You sent too many requests in a given amount of time (\"rate limit\"). Try again later. | | 5xx  | Server Errors        | Something went wrong with the Unify API. These errors are logged on our side. You can contact our team to resolve the issue. |  ### Handling errors  The Unify API and SDKs can produce errors for many reasons, such as a failed requests due to misconfigured integrations, invalid parameters, authentication errors, and network unavailability.  ### Error Types  #### RequestValidationError  Request is not valid for the current endpoint. The response body will include details on the validation error. Check the spelling and types of your attributes, and ensure you are not passing data that is outside of the specification.  #### UnsupportedFiltersError  Filters in the request are valid, but not supported by the connector. Remove the unsupported filter(s) to get a successful response.  #### InvalidCursorError  Pagination cursor in the request is not valid for the current connector. Make sure to use a cursor returned from the API, for the same connector.  #### ConnectorExecutionError  A Unified API request made via one of our downstream connectors returned an unexpected error. The `status_code` returned is proxied through to error response along with their original response via the error detail.  #### UnauthorizedError  We were unable to authorize the request as made. This can happen for a number of reasons, from missing header params to passing an incorrect authorization token. Verify your Api Key is being set correctly in the authorization header. ie: `Authorization: 'Bearer sk_live_***'`  #### ConnectorCredentialsError  A request using a given connector has not been authorized. Ensure the connector you are trying to use has been configured correctly and been authorized for use.  #### ConnectorDisabledError  A request has been made to a connector that has since been disabled. This may be temporary - You can contact our team to resolve the issue.  #### RequestLimitError  You have reached the number of requests included in your Free Tier Subscription. You will no be able to make further requests until this limit resets at the end of the month, or talk to us about upgrading your subscription to continue immediately.  #### EntityNotFoundError  You've made a request for a resource or route that does not exist. Verify your path parameters or any identifiers used to fetch this resource.  #### OAuthCredentialsNotFoundError  When adding a connector integration that implements OAuth, both a `client_id` and `client_secret` must be provided before any authorizations can be performed. Verify the integration has been configured properly before continuing.  #### IntegrationNotFoundError  The requested connector integration could not be found associated to your `application_id`. Verify your `application_id` is correct, and that this connector has been added and configured for your application.  #### ConnectionNotFoundError  A valid connection could not be found associated to your `application_id`. Something _may_ have interrupted the authorization flow. You may need to start the connector authorization process again.  #### ConnectorNotFoundError  A request was made for an unknown connector. Verify your `service_id` is spelled correctly, and that this connector is enabled for your provided `unified_api`.  #### OAuthRedirectUriError  A request was made either in a connector authorization flow, or attempting to revoke connector access without a valid `redirect_uri`. This is the url the user should be returned to on completion of process.  #### OAuthInvalidStateError  The state param is required and is used to ensure the outgoing authorization state has not been altered before the user is redirected back. It also contains required params needed to identify the connector being used. If this has been altered, the authorization will not succeed.  #### OAuthCodeExchangeError  When attempting to exchange the authorization code for an `access_token` during an OAuth flow, an error occurred. This may be temporary. You can reattempt authorization or contact our team to resolve the issue.  #### OAuthConnectorError  It seems something went wrong on the connector side. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### MappingError  There was an error attempting to retrieve the mapping for a given attribute. We've been notified and are working to fix this issue.  #### ConnectorMappingNotFoundError  It seems the implementation for this connector is incomplete. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorResponseMappingNotFoundError  We were unable to retrieve the response mapping for this connector. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorOperationMappingNotFoundError  Connector mapping has not been implemented for the requested operation. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorWorkflowMappingError  The composite api calls required for this operation have not been mapped entirely. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### PaginationNotSupportedError  Pagination is not yet supported for this connector, try removing limit and/or cursor from the query. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  ## API Design  ### API Styles and data formats  #### REST API  The API is organized around [REST](https://restfulapi.net/), providing simple and predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. JSON is returned by all API responses, including errors. In all API requests, you must set the content-type HTTP header to application/json. All API requests must be made over HTTPS. Calls made over HTTP will fail.  ### Request IDs  Each API request has an associated request identifier. You can find this value in the response headers, under Request-Id. You can also find request identifiers in the URLs of individual request logs in your Dashboard. If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.  ## Support  If you have problems or need help with your case, you can always reach out to our Support.  

    The version of the OpenAPI document: 10.0.0
    Contact: hello@apideck.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import io
import json
import re
import ssl

import urllib3

from openapi_client.exceptions import ApiException, ApiValueError

SUPPORTED_SOCKS_PROXIES = {"socks5", "socks5h", "socks4", "socks4a"}
RESTResponseType = urllib3.HTTPResponse


def is_socks_proxy_url(url):
    if url is None:
        return False
    split_section = url.split("://")
    if len(split_section) < 2:
        return False
    else:
        return split_section[0].lower() in SUPPORTED_SOCKS_PROXIES


class RESTResponse(io.IOBase):

    def __init__(self, resp) -> None:
        self.response = resp
        self.status = resp.status
        self.reason = resp.reason
        self.data = None

    def read(self):
        if self.data is None:
            self.data = self.response.data
        return self.data

    def getheaders(self):
        """Returns a dictionary of the response headers."""
        return self.response.headers

    def getheader(self, name, default=None):
        """Returns a given response header."""
        return self.response.headers.get(name, default)


class RESTClientObject:

    def __init__(self, configuration) -> None:
        # urllib3.PoolManager will pass all kw parameters to connectionpool
        # https://github.com/shazow/urllib3/blob/f9409436f83aeb79fbaf090181cd81b784f1b8ce/urllib3/poolmanager.py#L75  # noqa: E501
        # https://github.com/shazow/urllib3/blob/f9409436f83aeb79fbaf090181cd81b784f1b8ce/urllib3/connectionpool.py#L680  # noqa: E501
        # Custom SSL certificates and client certificates: http://urllib3.readthedocs.io/en/latest/advanced-usage.html  # noqa: E501

        # cert_reqs
        if configuration.verify_ssl:
            cert_reqs = ssl.CERT_REQUIRED
        else:
            cert_reqs = ssl.CERT_NONE

        pool_args = {
            "cert_reqs": cert_reqs,
            "ca_certs": configuration.ssl_ca_cert,
            "cert_file": configuration.cert_file,
            "key_file": configuration.key_file,
        }
        if configuration.assert_hostname is not None:
            pool_args['assert_hostname'] = (
                configuration.assert_hostname
            )

        if configuration.retries is not None:
            pool_args['retries'] = configuration.retries

        if configuration.tls_server_name:
            pool_args['server_hostname'] = configuration.tls_server_name


        if configuration.socket_options is not None:
            pool_args['socket_options'] = configuration.socket_options

        if configuration.connection_pool_maxsize is not None:
            pool_args['maxsize'] = configuration.connection_pool_maxsize

        # https pool manager
        self.pool_manager: urllib3.PoolManager

        if configuration.proxy:
            if is_socks_proxy_url(configuration.proxy):
                from urllib3.contrib.socks import SOCKSProxyManager
                pool_args["proxy_url"] = configuration.proxy
                pool_args["headers"] = configuration.proxy_headers
                self.pool_manager = SOCKSProxyManager(**pool_args)
            else:
                pool_args["proxy_url"] = configuration.proxy
                pool_args["proxy_headers"] = configuration.proxy_headers
                self.pool_manager = urllib3.ProxyManager(**pool_args)
        else:
            self.pool_manager = urllib3.PoolManager(**pool_args)

    def request(
        self,
        method,
        url,
        headers=None,
        body=None,
        post_params=None,
        _request_timeout=None
    ):
        """Perform requests.

        :param method: http request method
        :param url: http request url
        :param headers: http request headers
        :param body: request json body, for `application/json`
        :param post_params: request post parameters,
                            `application/x-www-form-urlencoded`
                            and `multipart/form-data`
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        """
        method = method.upper()
        assert method in [
            'GET',
            'HEAD',
            'DELETE',
            'POST',
            'PUT',
            'PATCH',
            'OPTIONS'
        ]

        if post_params and body:
            raise ApiValueError(
                "body parameter cannot be used with post_params parameter."
            )

        post_params = post_params or {}
        headers = headers or {}

        timeout = None
        if _request_timeout:
            if isinstance(_request_timeout, (int, float)):
                timeout = urllib3.Timeout(total=_request_timeout)
            elif (
                    isinstance(_request_timeout, tuple)
                    and len(_request_timeout) == 2
                ):
                timeout = urllib3.Timeout(
                    connect=_request_timeout[0],
                    read=_request_timeout[1]
                )

        try:
            # For `POST`, `PUT`, `PATCH`, `OPTIONS`, `DELETE`
            if method in ['POST', 'PUT', 'PATCH', 'OPTIONS', 'DELETE']:

                # no content type provided or payload is json
                content_type = headers.get('Content-Type')
                if (
                    not content_type
                    or re.search('json', content_type, re.IGNORECASE)
                ):
                    request_body = None
                    if body is not None:
                        request_body = json.dumps(body)
                    r = self.pool_manager.request(
                        method,
                        url,
                        body=request_body,
                        timeout=timeout,
                        headers=headers,
                        preload_content=False
                    )
                elif content_type == 'application/x-www-form-urlencoded':
                    r = self.pool_manager.request(
                        method,
                        url,
                        fields=post_params,
                        encode_multipart=False,
                        timeout=timeout,
                        headers=headers,
                        preload_content=False
                    )
                elif content_type == 'multipart/form-data':
                    # must del headers['Content-Type'], or the correct
                    # Content-Type which generated by urllib3 will be
                    # overwritten.
                    del headers['Content-Type']
                    # Ensures that dict objects are serialized
                    post_params = [(a, json.dumps(b)) if isinstance(b, dict) else (a,b) for a, b in post_params]
                    r = self.pool_manager.request(
                        method,
                        url,
                        fields=post_params,
                        encode_multipart=True,
                        timeout=timeout,
                        headers=headers,
                        preload_content=False
                    )
                # Pass a `string` parameter directly in the body to support
                # other content types than JSON when `body` argument is
                # provided in serialized form.
                elif isinstance(body, str) or isinstance(body, bytes):
                    r = self.pool_manager.request(
                        method,
                        url,
                        body=body,
                        timeout=timeout,
                        headers=headers,
                        preload_content=False
                    )
                elif headers['Content-Type'].startswith('text/') and isinstance(body, bool):
                    request_body = "true" if body else "false"
                    r = self.pool_manager.request(
                        method,
                        url,
                        body=request_body,
                        preload_content=False,
                        timeout=timeout,
                        headers=headers)
                else:
                    # Cannot generate the request from given parameters
                    msg = """Cannot prepare a request message for provided
                             arguments. Please check that your arguments match
                             declared content type."""
                    raise ApiException(status=0, reason=msg)
            # For `GET`, `HEAD`
            else:
                r = self.pool_manager.request(
                    method,
                    url,
                    fields={},
                    timeout=timeout,
                    headers=headers,
                    preload_content=False
                )
        except urllib3.exceptions.SSLError as e:
            msg = "\n".join([type(e).__name__, str(e)])
            raise ApiException(status=0, reason=msg)

        return RESTResponse(r)
