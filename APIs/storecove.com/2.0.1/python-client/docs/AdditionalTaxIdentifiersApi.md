# openapi_client.AdditionalTaxIdentifiersApi

All URIs are relative to *https://api.storecove.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_additional_tax_identifier**](AdditionalTaxIdentifiersApi.md#create_additional_tax_identifier) | **POST** /legal_entities/{legal_entity_id}/additional_tax_identifiers | Create a new AdditionalTaxIdentifier
[**delete_additional_tax_identifier**](AdditionalTaxIdentifiersApi.md#delete_additional_tax_identifier) | **DELETE** /legal_entities/{legal_entity_id}/additional_tax_identifiers/{id} | Delete AdditionalTaxIdentifier
[**get_additional_tax_identifier**](AdditionalTaxIdentifiersApi.md#get_additional_tax_identifier) | **GET** /legal_entities/{legal_entity_id}/additional_tax_identifiers/{id} | Get AdditionalTaxIdentifier
[**update_additional_tax_identifier**](AdditionalTaxIdentifiersApi.md#update_additional_tax_identifier) | **PATCH** /legal_entities/{legal_entity_id}/additional_tax_identifiers/{id} | Update AdditionalTaxIdentifier


# **create_additional_tax_identifier**
> AdditionalTaxIdentifier create_additional_tax_identifier(legal_entity_id, additional_tax_identifier_create)

Create a new AdditionalTaxIdentifier

Create a new AdditionalTaxIdentifier. An AdditionalTaxIdentifier is a seconday tax identifier that is used inside the EU when sending invoices to consumers. In that case, the VAT of the receiving country is used and if the sender has a local VAT identifier, that is used to identifiy the sender, instead of the sender's origin country VAT number. To use these identifiers, use the invoice.consumerTaxMode = true property.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.additional_tax_identifier import AdditionalTaxIdentifier
from openapi_client.models.additional_tax_identifier_create import AdditionalTaxIdentifierCreate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdditionalTaxIdentifiersApi(api_client)
    legal_entity_id = 56 # int | The id of the LegalEntity for which to create the AdditionalTaxIdentifier
    additional_tax_identifier_create = openapi_client.AdditionalTaxIdentifierCreate() # AdditionalTaxIdentifierCreate | AdditionalTaxIdentifier to create

    try:
        # Create a new AdditionalTaxIdentifier
        api_response = api_instance.create_additional_tax_identifier(legal_entity_id, additional_tax_identifier_create)
        print("The response of AdditionalTaxIdentifiersApi->create_additional_tax_identifier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdditionalTaxIdentifiersApi->create_additional_tax_identifier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legal_entity_id** | **int**| The id of the LegalEntity for which to create the AdditionalTaxIdentifier | 
 **additional_tax_identifier_create** | [**AdditionalTaxIdentifierCreate**](AdditionalTaxIdentifierCreate.md)| AdditionalTaxIdentifier to create | 

### Return type

[**AdditionalTaxIdentifier**](AdditionalTaxIdentifier.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_additional_tax_identifier**
> delete_additional_tax_identifier(legal_entity_id, id)

Delete AdditionalTaxIdentifier

Delete an AdditionalTaxIdentifier

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdditionalTaxIdentifiersApi(api_client)
    legal_entity_id = 56 # int | The id of the LegalEntity the AdditionalTaxIdentifier belongs to
    id = 56 # int | The id of the AdditionalTaxIdentifier

    try:
        # Delete AdditionalTaxIdentifier
        api_instance.delete_additional_tax_identifier(legal_entity_id, id)
    except Exception as e:
        print("Exception when calling AdditionalTaxIdentifiersApi->delete_additional_tax_identifier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legal_entity_id** | **int**| The id of the LegalEntity the AdditionalTaxIdentifier belongs to | 
 **id** | **int**| The id of the AdditionalTaxIdentifier | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_additional_tax_identifier**
> AdditionalTaxIdentifier get_additional_tax_identifier(legal_entity_id, id)

Get AdditionalTaxIdentifier

Get an AdditionalTaxIdentifier

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.additional_tax_identifier import AdditionalTaxIdentifier
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdditionalTaxIdentifiersApi(api_client)
    legal_entity_id = 56 # int | The id of the LegalEntity the AdditionalTaxIdentifier belongs to
    id = 56 # int | The id of the AdditionalTaxIdentifier

    try:
        # Get AdditionalTaxIdentifier
        api_response = api_instance.get_additional_tax_identifier(legal_entity_id, id)
        print("The response of AdditionalTaxIdentifiersApi->get_additional_tax_identifier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdditionalTaxIdentifiersApi->get_additional_tax_identifier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legal_entity_id** | **int**| The id of the LegalEntity the AdditionalTaxIdentifier belongs to | 
 **id** | **int**| The id of the AdditionalTaxIdentifier | 

### Return type

[**AdditionalTaxIdentifier**](AdditionalTaxIdentifier.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_additional_tax_identifier**
> AdditionalTaxIdentifier update_additional_tax_identifier(legal_entity_id, id, additional_tax_identifier_update)

Update AdditionalTaxIdentifier

Update an AdditionalTaxIdentifier

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.additional_tax_identifier import AdditionalTaxIdentifier
from openapi_client.models.additional_tax_identifier_update import AdditionalTaxIdentifierUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdditionalTaxIdentifiersApi(api_client)
    legal_entity_id = 56 # int | The id of the LegalEntity the AdditionalTaxIdentifier belongs to
    id = 56 # int | The id of the AdditionalTaxIdentifier to be updated
    additional_tax_identifier_update = openapi_client.AdditionalTaxIdentifierUpdate() # AdditionalTaxIdentifierUpdate | AdditionalTaxIdentifier to update

    try:
        # Update AdditionalTaxIdentifier
        api_response = api_instance.update_additional_tax_identifier(legal_entity_id, id, additional_tax_identifier_update)
        print("The response of AdditionalTaxIdentifiersApi->update_additional_tax_identifier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdditionalTaxIdentifiersApi->update_additional_tax_identifier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legal_entity_id** | **int**| The id of the LegalEntity the AdditionalTaxIdentifier belongs to | 
 **id** | **int**| The id of the AdditionalTaxIdentifier to be updated | 
 **additional_tax_identifier_update** | [**AdditionalTaxIdentifierUpdate**](AdditionalTaxIdentifierUpdate.md)| AdditionalTaxIdentifier to update | 

### Return type

[**AdditionalTaxIdentifier**](AdditionalTaxIdentifier.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

