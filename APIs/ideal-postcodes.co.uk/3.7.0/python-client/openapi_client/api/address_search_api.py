# coding: utf-8

"""
    API Reference - Ideal Postcodes

    # Getting Started  ## Overview  ### Access  All API methods are either a `GET`, `POST` or `OPTIONS` request.  The API communicates over both HTTPS and plain HTTP using IPv4 and IPv6.  We recommend using HTTPS only although HTTP is available.  We use appropriate HTTP status codes where possible to indicate the request status.  ### Rate Limiting  Each IP address is rate limited at 30 requests per second. Tripping the rate limit will result in a 503 response.  The autocomplete API also has an additional rate limit.  If you expect to breach the limit please contact us and we can move you to an endpoint with a higher limit.  ### JSONP  [JSONP](http://en.wikipedia.org/wiki/JSONP) requests are supported. Include a `callback=` in your request as a query parameter. Your results return wrapped in a function designated by your request.  ## Authentication  Most requests require an **API key** for authentication. Authenticate by passing an `api_key` as part of the query string. For example:  ``` api.ideal-postcodes.co.uk/v1/autocomplete/addresses?api_key=iddqd&q=parkside ```  Alternatively, authentication can be transmitted via the `Authorization` header using the following scheme:  ``` Authorization: api_key=\"iddqd\" [other_key=\"foo\"] ```  ## Versioning  This API is versioned with a simple prefix in the URL. The current version is `/v1/`. We will maintain backwards-compatibility by releasing breaking changes under a new version.  Please note that the following changes are backwards-compatible:  - Adding new properties to existing API responses - Adding new API endpoints - Adding new optional request parameters to existing API endpoints - Changing the order of properties in existing API responses - Changing the autocomplete address suggestion format  ## Error Handling  A successful lookup is accompanied with a HTTP status code of 200 and a response code of 2000 (found in the body).  An error has occurred if the HTTP status code is not 200. Errors can range from a benign 404 (resource not found) to more urgent errors (your API Key ran out of credit, failed authentication, etc).  ## Testing  Each new account comes with a free test balance. Contact us if you need more for testing and integration.  ### Community Key  Our documentation and demos make heavy use of our community key `iddqd`. This allows for convenient access for trialing the API.  Many restrictions on this key are relaxed to allow developers make test requests. This key has a limit of 15 lookups per IP address per day as well as a daily usage cap. If you hit any limit restrictions, you can continue testing the API by creating a key of your own and using our free test methods.  Please be kind with the community key. We're trusting everyone to use it responsibly so that other developers may trial the API. Thank you!  ## Metadata  Requests that affect your balance may be annotated with arbitrary metadata. This data is stored along with your lookup history and can be queried at a later date via the API or the dashboard. We call the ability to label your requests [tagging](https://docs.ideal-postcodes.co.uk/docs/guides/tags).  # Response Codes  The API returns two indicators to help you to determine the status of each HTTP request.  The first is the **HTTP Status**, which is found in the status-line of all HTTP requests. The API will return status codes that adhere to HTTP /1.1 Specifications wherever possible.  `2XX` status codes indicates success while `4XX` and `5XX` indicate client and server errors respectively.  The second is the **API response code**, which can be found in the `code` property of the response body. This code will provide a more specific reason if a failure has occurred and can point you in the right direction when debugging.  Please use the glossary of code numbers and HTTP status codes below when debugging your requests.  ## 200 Request Success  | HTTP Code | API Code | Description                                  | | --------- | -------- | -------------------------------------------- | | 200       | 2000     | Success. Request was completed successfully. |  ## 400 Bad Request  The request could not be understood due to some input error.  | HTTP Code | API Code | Description                                                                                                                           | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- | | 400       | 4000     | Invalid syntax submitted. Some part of your request was malformed or did not match our specifications.                                | | 400       | 4001     | Validation failed on your submitted data. Some of the data you provided did not meet our validation requirements, e.g. string length. | | 400       | 4005     | Invalid start date. Please ensure start dates are provided as a UTC Timestamp in milliseconds.                                        | | 400       | 4006     | Invalid end date. Please ensure end dates are provided as a UTC Timestamp in milliseconds.                                            | | 400       | 4007     | Invalid date range. Check if your start and end dates are in the right order.                                                         | | 400       | 4008     | Invalid date range. Check that your date range is 90 days or less.                                                                    | | 400       | 4009     | Too many tags. Please specify no more than 3 tags to query.                                                                           |  ## 401 Unauthorised  Authorization credentials are not valid.  | HTTP Code | API Code | Description                                                                                                                                                        | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | | 401       | 4010     | Invalid Key. The `api_key` you provided is not valid.                                                                                                              | | 401       | 4011     | Requesting URL not on whitelist. The cross domain request is not coming from a whitelisted URL. You can update or disable your allowed URLs via your Key settings. | | 401       | 4012     | Failed user authentication. Invalid `user_token` presented.                                                                                                        | | 401       | 4013     | Licensee Key is required. Sublicensed keys require you need to present licensee credentials via the `licensee` parameter.                                          |  ## 402 Request Failed  Your request is well-formed but are not able to complete your request for another reason.  | HTTP Code | API Code | Description                                                                                                                                                                                                                                                        | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | | 402       | 4020     | Key balance depleted. You're out of lookups on your API Key.                                                                                                                                                                                                       | | 402       | 4021     | Limit reached. One of your lookup limits has been breached for today. This could either be your total daily limit on your key or the individual IP limit. You can either wait for for the limit to reset (after a day) or manually disable or increase your limit. |  ## 404 Resource Not Found  The resource you requested does not exist.  | HTTP Code | API Code | Description                                                                                   | | --------- | -------- | --------------------------------------------------------------------------------------------- | | 404       | 4040     | Postcode not found. The postcode you have submitted does not exist.                           | | 404       | 4041     | User not found. Your user could not be identified given the credentials you presented.        | | 404       | 4042     | Key not found. Your key could not be identified given the credentials you presented.          | | 404       | 4044     | No UDPRN found. No address is associated with the UDPRN queried                               | | 404       | 4045     | No licensee found. Your licensee could not be identified given the credentials you presented. | | 404       | 4046     | No UMPRN found. No Multiple Residence premise is associated with the UMPRN queried.           |  ## 500 Server Error  A error occurred on our server.  | HTTP Code | API Code | Description                                                                                                                                                        | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | | 500       | 5000     | An error occurred on our end. These errors are logged and queued so we can understand what went wrong. However, if you need speedy resolution please email support | | 500       | 5001     | Akin to 5000.                                                                                                                                                      | | 500       | 5002     | The server took too long to process on our end, so we aborted the request. You may retry the request.                                                              | 

    The version of the OpenAPI document: 3.7.0
    Contact: support@ideal-postcodes.co.uk
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

import warnings
from pydantic import validate_call, Field, StrictFloat, StrictStr, StrictInt
from typing import Any, Dict, List, Optional, Tuple, Union
from typing_extensions import Annotated

from pydantic import Field, StrictInt, StrictStr
from typing import Optional
from typing_extensions import Annotated
from openapi_client.models.autocomplete_response import AutocompleteResponse
from openapi_client.models.bias_ip_param import BiasIpParam
from openapi_client.models.gbr_resolve_address_response import GbrResolveAddressResponse
from openapi_client.models.usa_resolve_address_response import UsaResolveAddressResponse

from openapi_client.api_client import ApiClient, RequestSerialized
from openapi_client.api_response import ApiResponse
from openapi_client.rest import RESTResponseType


class AddressSearchApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client


    @validate_call
    def address_autocomplete(
        self,
        api_key: Optional[StrictStr] = None,
        query: Annotated[Optional[StrictStr], Field(description="Specifies the address you wish to query. Query can be shortened to `q=`")] = None,
        context: Optional[StrictStr] = None,
        limit: Annotated[Optional[Annotated[int, Field(le=100, strict=True, ge=1)]], Field(description="Limits number of address suggestions unless a postcode is detected. In this instance entire list of addreses for that postcode is returned. ")] = None,
        postcode_outward: Optional[StrictStr] = None,
        postcode: Optional[StrictStr] = None,
        postcode_area: Optional[StrictStr] = None,
        postcode_sector: Optional[StrictStr] = None,
        post_town: Optional[StrictStr] = None,
        uprn: Optional[StrictInt] = None,
        country: Optional[StrictStr] = None,
        postcode_type: Optional[StrictStr] = None,
        su_organisation_indicator: Optional[StrictStr] = None,
        box: Optional[StrictStr] = None,
        bias_postcode_outward: Optional[StrictStr] = None,
        bias_postcode: Optional[StrictStr] = None,
        bias_postcode_area: Optional[StrictStr] = None,
        bias_postcode_sector: Optional[StrictStr] = None,
        bias_post_town: Optional[StrictStr] = None,
        bias_thoroughfare: Optional[StrictStr] = None,
        bias_country: Optional[StrictStr] = None,
        bias_lonlat: Optional[StrictStr] = None,
        bias_ip: Optional[BiasIpParam] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> AutocompleteResponse:
        """Find Address

        The address autocomplete API returns a list of address suggestions that match the query ordered by relevance.  This API can be used to power realtime address finders, also known as address autofill or address autocomplete.  Consider using our Address Autocomplete JavaScript libraries to add address lookup to a form in moments.  ## Implementing Address Autocomplete  Rapid address autocompletion using our Address Autocomplete API is a 2 step process.  1. Retrieve partial address suggestions via `/autocomplete/addresses` 2. Retrieve the entire address with the ID provided in the suggestion  Step 2 will decrement your lookup balance.  Please note, this API is not intended to be a free standalone resource.  ## Filters  You can strictly narrow your result by adding filters to your querystring. For instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.  If a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.  You can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`'ed, i.e. the matching result sets are combined.  All filters can accept multiple terms unless stated otherwise below.  Filters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`'ed, i.e. each additional filter narrows the result set.  A maximum of **10** terms are allowed across all filters.  ## Biases  You can boost certain addresses results that match specific address criteria. All bias searches are prefixed with `bias_`.  Biasing (unlike filtering) also allow unmatched addresses to appear with lower precedence.  For instance, can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.  No bias effect applies to bias terms that are invalid. e.g. `bias_postcode=SW1A2AAA`  You may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: <code>bias_postcode_outward=e1,e2,e3</code>.  All biases can accept multiple terms unless stated otherwise below.  A combined maximum of **5** terms are allowed across all biases.  ## Suggestion Format  The suggestion format is prone to change over time. Attempts to parse the suggestion may result in your integration breaking. Instead use the suggestion as-is.  ## Rate Limiting  You can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.  | Header                  | Description                                                                            | | ----------------------- | -------------------------------------------------------------------------------------- | | `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           | | `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            | | `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |  ## Pricing  This API currently does not affect your balance. However, resolving a suggestion into a full address requires a paid request.  Please note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an address may be disrupted via tightened rate limits. Continued misuse will result in account suspension. 

        :param api_key:
        :type api_key: str
        :param query: Specifies the address you wish to query. Query can be shortened to `q=`
        :type query: str
        :param context:
        :type context: str
        :param limit: Limits number of address suggestions unless a postcode is detected. In this instance entire list of addreses for that postcode is returned. 
        :type limit: int
        :param postcode_outward:
        :type postcode_outward: str
        :param postcode:
        :type postcode: str
        :param postcode_area:
        :type postcode_area: str
        :param postcode_sector:
        :type postcode_sector: str
        :param post_town:
        :type post_town: str
        :param uprn:
        :type uprn: int
        :param country:
        :type country: str
        :param postcode_type:
        :type postcode_type: str
        :param su_organisation_indicator:
        :type su_organisation_indicator: str
        :param box:
        :type box: str
        :param bias_postcode_outward:
        :type bias_postcode_outward: str
        :param bias_postcode:
        :type bias_postcode: str
        :param bias_postcode_area:
        :type bias_postcode_area: str
        :param bias_postcode_sector:
        :type bias_postcode_sector: str
        :param bias_post_town:
        :type bias_post_town: str
        :param bias_thoroughfare:
        :type bias_thoroughfare: str
        :param bias_country:
        :type bias_country: str
        :param bias_lonlat:
        :type bias_lonlat: str
        :param bias_ip:
        :type bias_ip: BiasIpParam
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._address_autocomplete_serialize(
            api_key=api_key,
            query=query,
            context=context,
            limit=limit,
            postcode_outward=postcode_outward,
            postcode=postcode,
            postcode_area=postcode_area,
            postcode_sector=postcode_sector,
            post_town=post_town,
            uprn=uprn,
            country=country,
            postcode_type=postcode_type,
            su_organisation_indicator=su_organisation_indicator,
            box=box,
            bias_postcode_outward=bias_postcode_outward,
            bias_postcode=bias_postcode,
            bias_postcode_area=bias_postcode_area,
            bias_postcode_sector=bias_postcode_sector,
            bias_post_town=bias_post_town,
            bias_thoroughfare=bias_thoroughfare,
            bias_country=bias_country,
            bias_lonlat=bias_lonlat,
            bias_ip=bias_ip,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "AutocompleteResponse",
            '400': "BadRequestResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def address_autocomplete_with_http_info(
        self,
        api_key: Optional[StrictStr] = None,
        query: Annotated[Optional[StrictStr], Field(description="Specifies the address you wish to query. Query can be shortened to `q=`")] = None,
        context: Optional[StrictStr] = None,
        limit: Annotated[Optional[Annotated[int, Field(le=100, strict=True, ge=1)]], Field(description="Limits number of address suggestions unless a postcode is detected. In this instance entire list of addreses for that postcode is returned. ")] = None,
        postcode_outward: Optional[StrictStr] = None,
        postcode: Optional[StrictStr] = None,
        postcode_area: Optional[StrictStr] = None,
        postcode_sector: Optional[StrictStr] = None,
        post_town: Optional[StrictStr] = None,
        uprn: Optional[StrictInt] = None,
        country: Optional[StrictStr] = None,
        postcode_type: Optional[StrictStr] = None,
        su_organisation_indicator: Optional[StrictStr] = None,
        box: Optional[StrictStr] = None,
        bias_postcode_outward: Optional[StrictStr] = None,
        bias_postcode: Optional[StrictStr] = None,
        bias_postcode_area: Optional[StrictStr] = None,
        bias_postcode_sector: Optional[StrictStr] = None,
        bias_post_town: Optional[StrictStr] = None,
        bias_thoroughfare: Optional[StrictStr] = None,
        bias_country: Optional[StrictStr] = None,
        bias_lonlat: Optional[StrictStr] = None,
        bias_ip: Optional[BiasIpParam] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[AutocompleteResponse]:
        """Find Address

        The address autocomplete API returns a list of address suggestions that match the query ordered by relevance.  This API can be used to power realtime address finders, also known as address autofill or address autocomplete.  Consider using our Address Autocomplete JavaScript libraries to add address lookup to a form in moments.  ## Implementing Address Autocomplete  Rapid address autocompletion using our Address Autocomplete API is a 2 step process.  1. Retrieve partial address suggestions via `/autocomplete/addresses` 2. Retrieve the entire address with the ID provided in the suggestion  Step 2 will decrement your lookup balance.  Please note, this API is not intended to be a free standalone resource.  ## Filters  You can strictly narrow your result by adding filters to your querystring. For instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.  If a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.  You can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`'ed, i.e. the matching result sets are combined.  All filters can accept multiple terms unless stated otherwise below.  Filters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`'ed, i.e. each additional filter narrows the result set.  A maximum of **10** terms are allowed across all filters.  ## Biases  You can boost certain addresses results that match specific address criteria. All bias searches are prefixed with `bias_`.  Biasing (unlike filtering) also allow unmatched addresses to appear with lower precedence.  For instance, can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.  No bias effect applies to bias terms that are invalid. e.g. `bias_postcode=SW1A2AAA`  You may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: <code>bias_postcode_outward=e1,e2,e3</code>.  All biases can accept multiple terms unless stated otherwise below.  A combined maximum of **5** terms are allowed across all biases.  ## Suggestion Format  The suggestion format is prone to change over time. Attempts to parse the suggestion may result in your integration breaking. Instead use the suggestion as-is.  ## Rate Limiting  You can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.  | Header                  | Description                                                                            | | ----------------------- | -------------------------------------------------------------------------------------- | | `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           | | `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            | | `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |  ## Pricing  This API currently does not affect your balance. However, resolving a suggestion into a full address requires a paid request.  Please note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an address may be disrupted via tightened rate limits. Continued misuse will result in account suspension. 

        :param api_key:
        :type api_key: str
        :param query: Specifies the address you wish to query. Query can be shortened to `q=`
        :type query: str
        :param context:
        :type context: str
        :param limit: Limits number of address suggestions unless a postcode is detected. In this instance entire list of addreses for that postcode is returned. 
        :type limit: int
        :param postcode_outward:
        :type postcode_outward: str
        :param postcode:
        :type postcode: str
        :param postcode_area:
        :type postcode_area: str
        :param postcode_sector:
        :type postcode_sector: str
        :param post_town:
        :type post_town: str
        :param uprn:
        :type uprn: int
        :param country:
        :type country: str
        :param postcode_type:
        :type postcode_type: str
        :param su_organisation_indicator:
        :type su_organisation_indicator: str
        :param box:
        :type box: str
        :param bias_postcode_outward:
        :type bias_postcode_outward: str
        :param bias_postcode:
        :type bias_postcode: str
        :param bias_postcode_area:
        :type bias_postcode_area: str
        :param bias_postcode_sector:
        :type bias_postcode_sector: str
        :param bias_post_town:
        :type bias_post_town: str
        :param bias_thoroughfare:
        :type bias_thoroughfare: str
        :param bias_country:
        :type bias_country: str
        :param bias_lonlat:
        :type bias_lonlat: str
        :param bias_ip:
        :type bias_ip: BiasIpParam
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._address_autocomplete_serialize(
            api_key=api_key,
            query=query,
            context=context,
            limit=limit,
            postcode_outward=postcode_outward,
            postcode=postcode,
            postcode_area=postcode_area,
            postcode_sector=postcode_sector,
            post_town=post_town,
            uprn=uprn,
            country=country,
            postcode_type=postcode_type,
            su_organisation_indicator=su_organisation_indicator,
            box=box,
            bias_postcode_outward=bias_postcode_outward,
            bias_postcode=bias_postcode,
            bias_postcode_area=bias_postcode_area,
            bias_postcode_sector=bias_postcode_sector,
            bias_post_town=bias_post_town,
            bias_thoroughfare=bias_thoroughfare,
            bias_country=bias_country,
            bias_lonlat=bias_lonlat,
            bias_ip=bias_ip,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "AutocompleteResponse",
            '400': "BadRequestResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def address_autocomplete_without_preload_content(
        self,
        api_key: Optional[StrictStr] = None,
        query: Annotated[Optional[StrictStr], Field(description="Specifies the address you wish to query. Query can be shortened to `q=`")] = None,
        context: Optional[StrictStr] = None,
        limit: Annotated[Optional[Annotated[int, Field(le=100, strict=True, ge=1)]], Field(description="Limits number of address suggestions unless a postcode is detected. In this instance entire list of addreses for that postcode is returned. ")] = None,
        postcode_outward: Optional[StrictStr] = None,
        postcode: Optional[StrictStr] = None,
        postcode_area: Optional[StrictStr] = None,
        postcode_sector: Optional[StrictStr] = None,
        post_town: Optional[StrictStr] = None,
        uprn: Optional[StrictInt] = None,
        country: Optional[StrictStr] = None,
        postcode_type: Optional[StrictStr] = None,
        su_organisation_indicator: Optional[StrictStr] = None,
        box: Optional[StrictStr] = None,
        bias_postcode_outward: Optional[StrictStr] = None,
        bias_postcode: Optional[StrictStr] = None,
        bias_postcode_area: Optional[StrictStr] = None,
        bias_postcode_sector: Optional[StrictStr] = None,
        bias_post_town: Optional[StrictStr] = None,
        bias_thoroughfare: Optional[StrictStr] = None,
        bias_country: Optional[StrictStr] = None,
        bias_lonlat: Optional[StrictStr] = None,
        bias_ip: Optional[BiasIpParam] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Find Address

        The address autocomplete API returns a list of address suggestions that match the query ordered by relevance.  This API can be used to power realtime address finders, also known as address autofill or address autocomplete.  Consider using our Address Autocomplete JavaScript libraries to add address lookup to a form in moments.  ## Implementing Address Autocomplete  Rapid address autocompletion using our Address Autocomplete API is a 2 step process.  1. Retrieve partial address suggestions via `/autocomplete/addresses` 2. Retrieve the entire address with the ID provided in the suggestion  Step 2 will decrement your lookup balance.  Please note, this API is not intended to be a free standalone resource.  ## Filters  You can strictly narrow your result by adding filters to your querystring. For instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.  If a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.  You can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`'ed, i.e. the matching result sets are combined.  All filters can accept multiple terms unless stated otherwise below.  Filters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`'ed, i.e. each additional filter narrows the result set.  A maximum of **10** terms are allowed across all filters.  ## Biases  You can boost certain addresses results that match specific address criteria. All bias searches are prefixed with `bias_`.  Biasing (unlike filtering) also allow unmatched addresses to appear with lower precedence.  For instance, can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.  No bias effect applies to bias terms that are invalid. e.g. `bias_postcode=SW1A2AAA`  You may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: <code>bias_postcode_outward=e1,e2,e3</code>.  All biases can accept multiple terms unless stated otherwise below.  A combined maximum of **5** terms are allowed across all biases.  ## Suggestion Format  The suggestion format is prone to change over time. Attempts to parse the suggestion may result in your integration breaking. Instead use the suggestion as-is.  ## Rate Limiting  You can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.  | Header                  | Description                                                                            | | ----------------------- | -------------------------------------------------------------------------------------- | | `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           | | `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            | | `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |  ## Pricing  This API currently does not affect your balance. However, resolving a suggestion into a full address requires a paid request.  Please note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an address may be disrupted via tightened rate limits. Continued misuse will result in account suspension. 

        :param api_key:
        :type api_key: str
        :param query: Specifies the address you wish to query. Query can be shortened to `q=`
        :type query: str
        :param context:
        :type context: str
        :param limit: Limits number of address suggestions unless a postcode is detected. In this instance entire list of addreses for that postcode is returned. 
        :type limit: int
        :param postcode_outward:
        :type postcode_outward: str
        :param postcode:
        :type postcode: str
        :param postcode_area:
        :type postcode_area: str
        :param postcode_sector:
        :type postcode_sector: str
        :param post_town:
        :type post_town: str
        :param uprn:
        :type uprn: int
        :param country:
        :type country: str
        :param postcode_type:
        :type postcode_type: str
        :param su_organisation_indicator:
        :type su_organisation_indicator: str
        :param box:
        :type box: str
        :param bias_postcode_outward:
        :type bias_postcode_outward: str
        :param bias_postcode:
        :type bias_postcode: str
        :param bias_postcode_area:
        :type bias_postcode_area: str
        :param bias_postcode_sector:
        :type bias_postcode_sector: str
        :param bias_post_town:
        :type bias_post_town: str
        :param bias_thoroughfare:
        :type bias_thoroughfare: str
        :param bias_country:
        :type bias_country: str
        :param bias_lonlat:
        :type bias_lonlat: str
        :param bias_ip:
        :type bias_ip: BiasIpParam
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._address_autocomplete_serialize(
            api_key=api_key,
            query=query,
            context=context,
            limit=limit,
            postcode_outward=postcode_outward,
            postcode=postcode,
            postcode_area=postcode_area,
            postcode_sector=postcode_sector,
            post_town=post_town,
            uprn=uprn,
            country=country,
            postcode_type=postcode_type,
            su_organisation_indicator=su_organisation_indicator,
            box=box,
            bias_postcode_outward=bias_postcode_outward,
            bias_postcode=bias_postcode,
            bias_postcode_area=bias_postcode_area,
            bias_postcode_sector=bias_postcode_sector,
            bias_post_town=bias_post_town,
            bias_thoroughfare=bias_thoroughfare,
            bias_country=bias_country,
            bias_lonlat=bias_lonlat,
            bias_ip=bias_ip,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "AutocompleteResponse",
            '400': "BadRequestResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _address_autocomplete_serialize(
        self,
        api_key,
        query,
        context,
        limit,
        postcode_outward,
        postcode,
        postcode_area,
        postcode_sector,
        post_town,
        uprn,
        country,
        postcode_type,
        su_organisation_indicator,
        box,
        bias_postcode_outward,
        bias_postcode,
        bias_postcode_area,
        bias_postcode_sector,
        bias_post_town,
        bias_thoroughfare,
        bias_country,
        bias_lonlat,
        bias_ip,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        if api_key is not None:
            
            _query_params.append(('api_key', api_key))
            
        if query is not None:
            
            _query_params.append(('query', query))
            
        if context is not None:
            
            _query_params.append(('context', context))
            
        if limit is not None:
            
            _query_params.append(('limit', limit))
            
        if postcode_outward is not None:
            
            _query_params.append(('postcode_outward', postcode_outward))
            
        if postcode is not None:
            
            _query_params.append(('postcode', postcode))
            
        if postcode_area is not None:
            
            _query_params.append(('postcode_area', postcode_area))
            
        if postcode_sector is not None:
            
            _query_params.append(('postcode_sector', postcode_sector))
            
        if post_town is not None:
            
            _query_params.append(('post_town', post_town))
            
        if uprn is not None:
            
            _query_params.append(('uprn', uprn))
            
        if country is not None:
            
            _query_params.append(('country', country))
            
        if postcode_type is not None:
            
            _query_params.append(('postcode_type', postcode_type))
            
        if su_organisation_indicator is not None:
            
            _query_params.append(('su_organisation_indicator', su_organisation_indicator))
            
        if box is not None:
            
            _query_params.append(('box', box))
            
        if bias_postcode_outward is not None:
            
            _query_params.append(('bias_postcode_outward', bias_postcode_outward))
            
        if bias_postcode is not None:
            
            _query_params.append(('bias_postcode', bias_postcode))
            
        if bias_postcode_area is not None:
            
            _query_params.append(('bias_postcode_area', bias_postcode_area))
            
        if bias_postcode_sector is not None:
            
            _query_params.append(('bias_postcode_sector', bias_postcode_sector))
            
        if bias_post_town is not None:
            
            _query_params.append(('bias_post_town', bias_post_town))
            
        if bias_thoroughfare is not None:
            
            _query_params.append(('bias_thoroughfare', bias_thoroughfare))
            
        if bias_country is not None:
            
            _query_params.append(('bias_country', bias_country))
            
        if bias_lonlat is not None:
            
            _query_params.append(('bias_lonlat', bias_lonlat))
            
        if bias_ip is not None:
            
            _query_params.append(('bias_ip', bias_ip.value))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/autocomplete/addresses',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def resolve(
        self,
        address: Annotated[StrictStr, Field(description="ID of address suggestion")],
        api_key: Optional[StrictStr] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> GbrResolveAddressResponse:
        """Resolve Address (GBR)

        Resolves an address autocompletion by its address ID.  Resolved addresses (including global addresses) are returned in a UK format (up to 3 address lines) using UK nomenclature (like postcode and county). 

        :param address: ID of address suggestion (required)
        :type address: str
        :param api_key:
        :type api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._resolve_serialize(
            address=address,
            api_key=api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GbrResolveAddressResponse",
            '404': "ErrorResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def resolve_with_http_info(
        self,
        address: Annotated[StrictStr, Field(description="ID of address suggestion")],
        api_key: Optional[StrictStr] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[GbrResolveAddressResponse]:
        """Resolve Address (GBR)

        Resolves an address autocompletion by its address ID.  Resolved addresses (including global addresses) are returned in a UK format (up to 3 address lines) using UK nomenclature (like postcode and county). 

        :param address: ID of address suggestion (required)
        :type address: str
        :param api_key:
        :type api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._resolve_serialize(
            address=address,
            api_key=api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GbrResolveAddressResponse",
            '404': "ErrorResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def resolve_without_preload_content(
        self,
        address: Annotated[StrictStr, Field(description="ID of address suggestion")],
        api_key: Optional[StrictStr] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Resolve Address (GBR)

        Resolves an address autocompletion by its address ID.  Resolved addresses (including global addresses) are returned in a UK format (up to 3 address lines) using UK nomenclature (like postcode and county). 

        :param address: ID of address suggestion (required)
        :type address: str
        :param api_key:
        :type api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._resolve_serialize(
            address=address,
            api_key=api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GbrResolveAddressResponse",
            '404': "ErrorResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _resolve_serialize(
        self,
        address,
        api_key,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if address is not None:
            _path_params['address'] = address
        # process the query parameters
        if api_key is not None:
            
            _query_params.append(('api_key', api_key))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/autocomplete/addresses/{address}/gbr',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def resolve_usa(
        self,
        address: Annotated[StrictStr, Field(description="ID of address suggestion")],
        api_key: Optional[StrictStr] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> UsaResolveAddressResponse:
        """Resolve Address (USA)

        Resolves an address autocompletion by its address ID.  Resolved addresses (including global addresses) are returned in a US format (up to 2 address lines) using US nomenclature (like zipcode, state and city). 

        :param address: ID of address suggestion (required)
        :type address: str
        :param api_key:
        :type api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._resolve_usa_serialize(
            address=address,
            api_key=api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UsaResolveAddressResponse",
            '404': "ErrorResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def resolve_usa_with_http_info(
        self,
        address: Annotated[StrictStr, Field(description="ID of address suggestion")],
        api_key: Optional[StrictStr] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[UsaResolveAddressResponse]:
        """Resolve Address (USA)

        Resolves an address autocompletion by its address ID.  Resolved addresses (including global addresses) are returned in a US format (up to 2 address lines) using US nomenclature (like zipcode, state and city). 

        :param address: ID of address suggestion (required)
        :type address: str
        :param api_key:
        :type api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._resolve_usa_serialize(
            address=address,
            api_key=api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UsaResolveAddressResponse",
            '404': "ErrorResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def resolve_usa_without_preload_content(
        self,
        address: Annotated[StrictStr, Field(description="ID of address suggestion")],
        api_key: Optional[StrictStr] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Resolve Address (USA)

        Resolves an address autocompletion by its address ID.  Resolved addresses (including global addresses) are returned in a US format (up to 2 address lines) using US nomenclature (like zipcode, state and city). 

        :param address: ID of address suggestion (required)
        :type address: str
        :param api_key:
        :type api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._resolve_usa_serialize(
            address=address,
            api_key=api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UsaResolveAddressResponse",
            '404': "ErrorResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _resolve_usa_serialize(
        self,
        address,
        api_key,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if address is not None:
            _path_params['address'] = address
        # process the query parameters
        if api_key is not None:
            
            _query_params.append(('api_key', api_key))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/autocomplete/addresses/{address}/usa',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )


