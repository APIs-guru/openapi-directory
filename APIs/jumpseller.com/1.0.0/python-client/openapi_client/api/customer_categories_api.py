# coding: utf-8

"""
    Jumpseller API

    # Endpoint Structure  All URLs are in the format:   ```text https://api.jumpseller.com/v1/path.json?login=XXXXXX&authtoken=storetoken   ```  The path is prefixed by the API version and the URL takes as parameters the login (your store specific API login) and your authentication token. <br/><br/> ***  # Version  The current version of the API is **v1**.   If we change the API in backward-incompatible ways, we'll increase the version number and maintain stable support for the old urls. <br/><br/> ***  # Authentication  The API uses a token-based authentication with a combination of a login key and an auth token. **Both parameters can be found on the left sidebar of the Account section, accessed from the main menu of your Admin Panel**. The auth token of the user can be reset on the same page.  ![Store Login](/images/support/api/apilogin.png)  The auth token is a **32 characters** string.  If you are developing a Jumpseller App, the authentication should be done using [OAuth-2](/support/oauth-2). Please read the article [Build an App](/support/apps) for more information. <br/><br/> ***  # Curl Examples  To request all the products at your store, you would append the products index path to the base url to create an URL with the format:    ```text https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX ```  In curl, you can invoque that URL with:    ```text curl -X GET \"https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX\" ```  To create a product, you will include the JSON data and specify the MIME Type:    ```text curl -X POST -d '{ \"product\" : {\"name\": \"My new Product!\", \"price\": 100} }' \"https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX\" -H \"Content-Type:application/json\" ```  and to update the product identified with 123:    ```text curl -X PUT -d '{ \"product\" : {\"name\": \"My updated Product!\", \"price\": 99} }' \"https://api.jumpseller.com/v1/products/123.json?login=XXXXXX&authtoken=XXXXX\" -H \"Content-Type:application/json\" ```  or delete it:    ```text curl -X DELETE \"https://api.jumpseller.com/v1/products/123.json?login=XXXXXX&authtoken=XXXXX\" -H \"Content-Type:application/json\" ``` <br/><br/> ***  # PHP Examples  Create a new Product (POST method)  ```php $url = 'https://api.jumpseller.com/v1/products.json?login=XXXXX&authtoken=XXXXX; $ch = curl_init($url); curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, \"POST\"); //post method curl_setopt($ch, CURLOPT_POSTFIELDS, '{ \"product\" : {\"name\": \"My updated Product!\", \"price\": 99} }');  $result = curl_exec($ch); print_r($result); curl_close($ch); ``` <br/><br/> ***  # Plain JSON only. No XML.  * We only support JSON for data serialization. * Our node format has no root element.   * We use snake_case to describe attribute keys (like \"created_at\").   * All empty value are replaced with **null** strings. * All API URLs end in .json to indicate that they accept and return JSON. * POST and PUT methods require you to explicitly state the MIME type of your request's body content as **\"application/json\"**. <br/><br/> ***  # Rate Limit You can perform a maximum of:  + 240 (two hundred forty) requests per minute and + 8 (eight) requests per second   If you exceed this limit, you'll get a 403 Forbidden (Rate Limit Exceeded) response for subsequent requests.    The rate limits apply by IP address and by store. This means that multiple requests on different stores are not counted towards the same rate limit.  This limits are necessary to ensure resources are correctly used. Your application should be aware of this limits and retry any unsuccessful request, check the following Ruby stub:  ```ruby tries = 0; max_tries = 3; begin   HTTParty.send(method, uri) # perform an API call.   sleep 0.5   tries += 1 rescue   unless tries >= max_tries     sleep 1.0 # wait the necessary time before retrying the call again.     retry   end end ```  Finally, you can review the Response Headers of each request:  ```text Jumpseller-PerMinuteRateLimit-Limit: 60   Jumpseller-PerMinuteRateLimit-Remaining: 59 # requests available on the per-second interval   Jumpseller-PerSecondRateLimit-Limit: 2   Jumpseller-PerSecondRateLimit-Remaining: 1 # requests available on the per-second interval ```   to better model your application requests intervals.  In the event of getting your IP banned, the Response Header `Jumpseller-BannedByRateLimit-Reset` informs you the time when will your ban be reseted. <br/><br/> ***  # Pagination  By default we will return 50 objects (products, orders, etc) per page. There is a maximum of 100, using a query string `&limit=100`. If the result set gets paginated it is your responsibility to check the next page for more objects -- you do this by using query strings `&page=2`, `&page=3` and so on.  ```text https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX&page=3&limit=100 ``` <br/><br/> ***  # More * [Jumpseller API wrapper](https://gitlab.com/jumpseller-api/ruby) provides a public Ruby abstraction over our API; * [Apps Page](/apps) showcases external integrations with Jumpseller done by technical experts; * [Imgbb API](https://api.imgbb.com/) provides an easy way to upload and temporaly host for images and files. <br/><br/> *** <br/><br/> 

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

import warnings
from pydantic import validate_call, Field, StrictFloat, StrictStr, StrictInt
from typing import Any, Dict, List, Optional, Tuple, Union
from typing_extensions import Annotated

from pydantic import Field, StrictInt, StrictStr
from typing import List, Optional
from typing_extensions import Annotated
from openapi_client.models.customer import Customer
from openapi_client.models.customer_category import CustomerCategory
from openapi_client.models.customer_category_edit import CustomerCategoryEdit
from openapi_client.models.customers_to_customer_category import CustomersToCustomerCategory

from openapi_client.api_client import ApiClient, RequestSerialized
from openapi_client.api_response import ApiResponse
from openapi_client.rest import RESTResponseType


class CustomerCategoriesApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client


    @validate_call
    def customer_categories_id_customers_json_delete(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
        customers_to_customer_category: Annotated[CustomersToCustomerCategory, Field(description="Customer parameters.")],
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
    ) -> str:
        """Delete Customers from an existing CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
        :param customers_to_customer_category: Customer parameters. (required)
        :type customers_to_customer_category: CustomersToCustomerCategory
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

        _param = self._customer_categories_id_customers_json_delete_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            customers_to_customer_category=customers_to_customer_category,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "str",
            '404': "NotFound",
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
    def customer_categories_id_customers_json_delete_with_http_info(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
        customers_to_customer_category: Annotated[CustomersToCustomerCategory, Field(description="Customer parameters.")],
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
    ) -> ApiResponse[str]:
        """Delete Customers from an existing CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
        :param customers_to_customer_category: Customer parameters. (required)
        :type customers_to_customer_category: CustomersToCustomerCategory
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

        _param = self._customer_categories_id_customers_json_delete_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            customers_to_customer_category=customers_to_customer_category,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "str",
            '404': "NotFound",
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
    def customer_categories_id_customers_json_delete_without_preload_content(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
        customers_to_customer_category: Annotated[CustomersToCustomerCategory, Field(description="Customer parameters.")],
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
        """Delete Customers from an existing CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
        :param customers_to_customer_category: Customer parameters. (required)
        :type customers_to_customer_category: CustomersToCustomerCategory
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

        _param = self._customer_categories_id_customers_json_delete_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            customers_to_customer_category=customers_to_customer_category,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "str",
            '404': "NotFound",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _customer_categories_id_customers_json_delete_serialize(
        self,
        login,
        authtoken,
        id,
        customers_to_customer_category,
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
        if id is not None:
            _path_params['id'] = id
        # process the query parameters
        if login is not None:
            
            _query_params.append(('login', login))
            
        if authtoken is not None:
            
            _query_params.append(('authtoken', authtoken))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if customers_to_customer_category is not None:
            _body_params = customers_to_customer_category


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='DELETE',
            resource_path='/customer_categories/{id}/customers.json',
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
    def customer_categories_id_customers_json_get(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
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
    ) -> List[Customer]:
        """Retrieves the customers in a CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
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

        _param = self._customer_categories_id_customers_json_get_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "List[Customer]",
            '404': "NotFound",
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
    def customer_categories_id_customers_json_get_with_http_info(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
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
    ) -> ApiResponse[List[Customer]]:
        """Retrieves the customers in a CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
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

        _param = self._customer_categories_id_customers_json_get_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "List[Customer]",
            '404': "NotFound",
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
    def customer_categories_id_customers_json_get_without_preload_content(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
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
        """Retrieves the customers in a CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
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

        _param = self._customer_categories_id_customers_json_get_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "List[Customer]",
            '404': "NotFound",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _customer_categories_id_customers_json_get_serialize(
        self,
        login,
        authtoken,
        id,
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
        if id is not None:
            _path_params['id'] = id
        # process the query parameters
        if login is not None:
            
            _query_params.append(('login', login))
            
        if authtoken is not None:
            
            _query_params.append(('authtoken', authtoken))
            
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
            resource_path='/customer_categories/{id}/customers.json',
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
    def customer_categories_id_customers_json_post(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
        customers_to_customer_category: Annotated[CustomersToCustomerCategory, Field(description="Customer parameters.")],
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
    ) -> List[Customer]:
        """Adds Customers to a CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
        :param customers_to_customer_category: Customer parameters. (required)
        :type customers_to_customer_category: CustomersToCustomerCategory
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

        _param = self._customer_categories_id_customers_json_post_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            customers_to_customer_category=customers_to_customer_category,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "List[Customer]",
            '404': "NotFound",
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
    def customer_categories_id_customers_json_post_with_http_info(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
        customers_to_customer_category: Annotated[CustomersToCustomerCategory, Field(description="Customer parameters.")],
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
    ) -> ApiResponse[List[Customer]]:
        """Adds Customers to a CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
        :param customers_to_customer_category: Customer parameters. (required)
        :type customers_to_customer_category: CustomersToCustomerCategory
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

        _param = self._customer_categories_id_customers_json_post_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            customers_to_customer_category=customers_to_customer_category,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "List[Customer]",
            '404': "NotFound",
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
    def customer_categories_id_customers_json_post_without_preload_content(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
        customers_to_customer_category: Annotated[CustomersToCustomerCategory, Field(description="Customer parameters.")],
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
        """Adds Customers to a CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
        :param customers_to_customer_category: Customer parameters. (required)
        :type customers_to_customer_category: CustomersToCustomerCategory
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

        _param = self._customer_categories_id_customers_json_post_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            customers_to_customer_category=customers_to_customer_category,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "List[Customer]",
            '404': "NotFound",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _customer_categories_id_customers_json_post_serialize(
        self,
        login,
        authtoken,
        id,
        customers_to_customer_category,
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
        if id is not None:
            _path_params['id'] = id
        # process the query parameters
        if login is not None:
            
            _query_params.append(('login', login))
            
        if authtoken is not None:
            
            _query_params.append(('authtoken', authtoken))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if customers_to_customer_category is not None:
            _body_params = customers_to_customer_category


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/customer_categories/{id}/customers.json',
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
    def customer_categories_id_json_delete(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
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
    ) -> str:
        """Delete an existing CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
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

        _param = self._customer_categories_id_json_delete_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "str",
            '404': "NotFound",
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
    def customer_categories_id_json_delete_with_http_info(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
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
    ) -> ApiResponse[str]:
        """Delete an existing CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
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

        _param = self._customer_categories_id_json_delete_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "str",
            '404': "NotFound",
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
    def customer_categories_id_json_delete_without_preload_content(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
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
        """Delete an existing CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
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

        _param = self._customer_categories_id_json_delete_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "str",
            '404': "NotFound",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _customer_categories_id_json_delete_serialize(
        self,
        login,
        authtoken,
        id,
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
        if id is not None:
            _path_params['id'] = id
        # process the query parameters
        if login is not None:
            
            _query_params.append(('login', login))
            
        if authtoken is not None:
            
            _query_params.append(('authtoken', authtoken))
            
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
            method='DELETE',
            resource_path='/customer_categories/{id}.json',
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
    def customer_categories_id_json_get(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
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
    ) -> CustomerCategory:
        """Retrieve a single CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
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

        _param = self._customer_categories_id_json_get_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CustomerCategory",
            '404': "NotFound",
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
    def customer_categories_id_json_get_with_http_info(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
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
    ) -> ApiResponse[CustomerCategory]:
        """Retrieve a single CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
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

        _param = self._customer_categories_id_json_get_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CustomerCategory",
            '404': "NotFound",
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
    def customer_categories_id_json_get_without_preload_content(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
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
        """Retrieve a single CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
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

        _param = self._customer_categories_id_json_get_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CustomerCategory",
            '404': "NotFound",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _customer_categories_id_json_get_serialize(
        self,
        login,
        authtoken,
        id,
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
        if id is not None:
            _path_params['id'] = id
        # process the query parameters
        if login is not None:
            
            _query_params.append(('login', login))
            
        if authtoken is not None:
            
            _query_params.append(('authtoken', authtoken))
            
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
            resource_path='/customer_categories/{id}.json',
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
    def customer_categories_id_json_put(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
        customer_category_edit: Annotated[CustomerCategoryEdit, Field(description="CustomerCategory parameters.")],
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
    ) -> CustomerCategory:
        """Update a CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
        :param customer_category_edit: CustomerCategory parameters. (required)
        :type customer_category_edit: CustomerCategoryEdit
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

        _param = self._customer_categories_id_json_put_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            customer_category_edit=customer_category_edit,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CustomerCategory",
            '404': "NotFound",
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
    def customer_categories_id_json_put_with_http_info(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
        customer_category_edit: Annotated[CustomerCategoryEdit, Field(description="CustomerCategory parameters.")],
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
    ) -> ApiResponse[CustomerCategory]:
        """Update a CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
        :param customer_category_edit: CustomerCategory parameters. (required)
        :type customer_category_edit: CustomerCategoryEdit
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

        _param = self._customer_categories_id_json_put_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            customer_category_edit=customer_category_edit,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CustomerCategory",
            '404': "NotFound",
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
    def customer_categories_id_json_put_without_preload_content(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        id: Annotated[StrictInt, Field(description="Id of the CustomerCategory")],
        customer_category_edit: Annotated[CustomerCategoryEdit, Field(description="CustomerCategory parameters.")],
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
        """Update a CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param id: Id of the CustomerCategory (required)
        :type id: int
        :param customer_category_edit: CustomerCategory parameters. (required)
        :type customer_category_edit: CustomerCategoryEdit
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

        _param = self._customer_categories_id_json_put_serialize(
            login=login,
            authtoken=authtoken,
            id=id,
            customer_category_edit=customer_category_edit,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CustomerCategory",
            '404': "NotFound",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _customer_categories_id_json_put_serialize(
        self,
        login,
        authtoken,
        id,
        customer_category_edit,
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
        if id is not None:
            _path_params['id'] = id
        # process the query parameters
        if login is not None:
            
            _query_params.append(('login', login))
            
        if authtoken is not None:
            
            _query_params.append(('authtoken', authtoken))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if customer_category_edit is not None:
            _body_params = customer_category_edit


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='PUT',
            resource_path='/customer_categories/{id}.json',
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
    def customer_categories_json_get(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        limit: Annotated[Optional[Annotated[int, Field(le=200, strict=True)]], Field(description="List restriction")] = None,
        page: Annotated[Optional[StrictInt], Field(description="List page")] = None,
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
    ) -> List[CustomerCategory]:
        """Retrieve all Customer Categories.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param limit: List restriction
        :type limit: int
        :param page: List page
        :type page: int
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

        _param = self._customer_categories_json_get_serialize(
            login=login,
            authtoken=authtoken,
            limit=limit,
            page=page,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "List[CustomerCategory]",
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
    def customer_categories_json_get_with_http_info(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        limit: Annotated[Optional[Annotated[int, Field(le=200, strict=True)]], Field(description="List restriction")] = None,
        page: Annotated[Optional[StrictInt], Field(description="List page")] = None,
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
    ) -> ApiResponse[List[CustomerCategory]]:
        """Retrieve all Customer Categories.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param limit: List restriction
        :type limit: int
        :param page: List page
        :type page: int
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

        _param = self._customer_categories_json_get_serialize(
            login=login,
            authtoken=authtoken,
            limit=limit,
            page=page,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "List[CustomerCategory]",
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
    def customer_categories_json_get_without_preload_content(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        limit: Annotated[Optional[Annotated[int, Field(le=200, strict=True)]], Field(description="List restriction")] = None,
        page: Annotated[Optional[StrictInt], Field(description="List page")] = None,
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
        """Retrieve all Customer Categories.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param limit: List restriction
        :type limit: int
        :param page: List page
        :type page: int
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

        _param = self._customer_categories_json_get_serialize(
            login=login,
            authtoken=authtoken,
            limit=limit,
            page=page,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "List[CustomerCategory]",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _customer_categories_json_get_serialize(
        self,
        login,
        authtoken,
        limit,
        page,
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
        if login is not None:
            
            _query_params.append(('login', login))
            
        if authtoken is not None:
            
            _query_params.append(('authtoken', authtoken))
            
        if limit is not None:
            
            _query_params.append(('limit', limit))
            
        if page is not None:
            
            _query_params.append(('page', page))
            
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
            resource_path='/customer_categories.json',
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
    def customer_categories_json_post(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        customer_category_edit: Annotated[CustomerCategoryEdit, Field(description="CustomerCategory parameters.")],
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
    ) -> CustomerCategory:
        """Create a new CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param customer_category_edit: CustomerCategory parameters. (required)
        :type customer_category_edit: CustomerCategoryEdit
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

        _param = self._customer_categories_json_post_serialize(
            login=login,
            authtoken=authtoken,
            customer_category_edit=customer_category_edit,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CustomerCategory",
            '404': "NotFound",
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
    def customer_categories_json_post_with_http_info(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        customer_category_edit: Annotated[CustomerCategoryEdit, Field(description="CustomerCategory parameters.")],
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
    ) -> ApiResponse[CustomerCategory]:
        """Create a new CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param customer_category_edit: CustomerCategory parameters. (required)
        :type customer_category_edit: CustomerCategoryEdit
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

        _param = self._customer_categories_json_post_serialize(
            login=login,
            authtoken=authtoken,
            customer_category_edit=customer_category_edit,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CustomerCategory",
            '404': "NotFound",
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
    def customer_categories_json_post_without_preload_content(
        self,
        login: Annotated[StrictStr, Field(description="API OAuth login.")],
        authtoken: Annotated[StrictStr, Field(description="API OAuth token.")],
        customer_category_edit: Annotated[CustomerCategoryEdit, Field(description="CustomerCategory parameters.")],
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
        """Create a new CustomerCategory.


        :param login: API OAuth login. (required)
        :type login: str
        :param authtoken: API OAuth token. (required)
        :type authtoken: str
        :param customer_category_edit: CustomerCategory parameters. (required)
        :type customer_category_edit: CustomerCategoryEdit
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

        _param = self._customer_categories_json_post_serialize(
            login=login,
            authtoken=authtoken,
            customer_category_edit=customer_category_edit,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CustomerCategory",
            '404': "NotFound",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _customer_categories_json_post_serialize(
        self,
        login,
        authtoken,
        customer_category_edit,
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
        if login is not None:
            
            _query_params.append(('login', login))
            
        if authtoken is not None:
            
            _query_params.append(('authtoken', authtoken))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if customer_category_edit is not None:
            _body_params = customer_category_edit


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/customer_categories.json',
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


