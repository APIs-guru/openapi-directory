# openapi_client.ValidationAuthoritiesApi

All URIs are relative to *http://otoroshi-api.oto.tools*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_client_validator**](ValidationAuthoritiesApi.md#create_client_validator) | **POST** /api/client-validators | Create one validation authorities
[**delete_client_validator**](ValidationAuthoritiesApi.md#delete_client_validator) | **DELETE** /api/client-validators/{id} | Delete one validation authorities by id
[**find_all_client_validators**](ValidationAuthoritiesApi.md#find_all_client_validators) | **GET** /api/client-validators | Get all validation authoritiess
[**find_client_validator_by_id**](ValidationAuthoritiesApi.md#find_client_validator_by_id) | **GET** /api/client-validators/{id} | Get one validation authorities by id
[**patch_client_validator**](ValidationAuthoritiesApi.md#patch_client_validator) | **PATCH** /api/client-validators/{id} | Update one validation authorities by id
[**update_client_validator**](ValidationAuthoritiesApi.md#update_client_validator) | **PUT** /api/client-validators/{id} | Update one validation authorities by id


# **create_client_validator**
> ValidationAuthority create_client_validator(validation_authority=validation_authority)

Create one validation authorities

Create one validation authorities

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.validation_authority import ValidationAuthority
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ValidationAuthoritiesApi(api_client)
    validation_authority = openapi_client.ValidationAuthority() # ValidationAuthority |  (optional)

    try:
        # Create one validation authorities
        api_response = api_instance.create_client_validator(validation_authority=validation_authority)
        print("The response of ValidationAuthoritiesApi->create_client_validator:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ValidationAuthoritiesApi->create_client_validator: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validation_authority** | [**ValidationAuthority**](ValidationAuthority.md)|  | [optional] 

### Return type

[**ValidationAuthority**](ValidationAuthority.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_client_validator**
> Deleted delete_client_validator(id)

Delete one validation authorities by id

Delete one validation authorities by id

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.deleted import Deleted
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ValidationAuthoritiesApi(api_client)
    id = 'id_example' # str | The validation authorities id

    try:
        # Delete one validation authorities by id
        api_response = api_instance.delete_client_validator(id)
        print("The response of ValidationAuthoritiesApi->delete_client_validator:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ValidationAuthoritiesApi->delete_client_validator: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The validation authorities id | 

### Return type

[**Deleted**](Deleted.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_all_client_validators**
> List[ValidationAuthority] find_all_client_validators()

Get all validation authoritiess

Get all validation authoritiess

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.validation_authority import ValidationAuthority
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ValidationAuthoritiesApi(api_client)

    try:
        # Get all validation authoritiess
        api_response = api_instance.find_all_client_validators()
        print("The response of ValidationAuthoritiesApi->find_all_client_validators:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ValidationAuthoritiesApi->find_all_client_validators: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ValidationAuthority]**](ValidationAuthority.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_client_validator_by_id**
> ValidationAuthority find_client_validator_by_id(id)

Get one validation authorities by id

Get one validation authorities by id

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.validation_authority import ValidationAuthority
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ValidationAuthoritiesApi(api_client)
    id = 'id_example' # str | The auth. config id

    try:
        # Get one validation authorities by id
        api_response = api_instance.find_client_validator_by_id(id)
        print("The response of ValidationAuthoritiesApi->find_client_validator_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ValidationAuthoritiesApi->find_client_validator_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The auth. config id | 

### Return type

[**ValidationAuthority**](ValidationAuthority.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_client_validator**
> ValidationAuthority patch_client_validator(id, patch_inner=patch_inner)

Update one validation authorities by id

Update one validation authorities by id

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.patch_inner import PatchInner
from openapi_client.models.validation_authority import ValidationAuthority
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ValidationAuthoritiesApi(api_client)
    id = 'id_example' # str | The validation authorities id
    patch_inner = [openapi_client.PatchInner()] # List[PatchInner] |  (optional)

    try:
        # Update one validation authorities by id
        api_response = api_instance.patch_client_validator(id, patch_inner=patch_inner)
        print("The response of ValidationAuthoritiesApi->patch_client_validator:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ValidationAuthoritiesApi->patch_client_validator: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The validation authorities id | 
 **patch_inner** | [**List[PatchInner]**](PatchInner.md)|  | [optional] 

### Return type

[**ValidationAuthority**](ValidationAuthority.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_client_validator**
> ValidationAuthority update_client_validator(id, validation_authority=validation_authority)

Update one validation authorities by id

Update one validation authorities by id

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.validation_authority import ValidationAuthority
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ValidationAuthoritiesApi(api_client)
    id = 'id_example' # str | The validation authorities id
    validation_authority = openapi_client.ValidationAuthority() # ValidationAuthority |  (optional)

    try:
        # Update one validation authorities by id
        api_response = api_instance.update_client_validator(id, validation_authority=validation_authority)
        print("The response of ValidationAuthoritiesApi->update_client_validator:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ValidationAuthoritiesApi->update_client_validator: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The validation authorities id | 
 **validation_authority** | [**ValidationAuthority**](ValidationAuthority.md)|  | [optional] 

### Return type

[**ValidationAuthority**](ValidationAuthority.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

