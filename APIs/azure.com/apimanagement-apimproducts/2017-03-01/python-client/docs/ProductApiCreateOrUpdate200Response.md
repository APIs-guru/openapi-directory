# ProductApiCreateOrUpdate200Response

Api Contract Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the Entity | [optional] 
**name** | **str** | API name. | [optional] 
**path** | **str** | Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API. | 
**protocols** | **List[str]** | Describes on which protocols the operations in this API can be invoked. | [optional] 
**service_url** | **str** | Absolute URL of the backend service implementing this API. | [optional] 
**api_revision** | **str** | Describes the Revision of the Api. If no value is provided, default revision 1 is created | [optional] 
**authentication_settings** | [**ProductApiCreateOrUpdate200ResponseAllOfAllOfAuthenticationSettings**](ProductApiCreateOrUpdate200ResponseAllOfAllOfAuthenticationSettings.md) |  | [optional] 
**description** | **str** | Description of the API. May include HTML formatting tags. | [optional] 
**is_current** | **bool** | Indicates if API revision is current api revision. | [optional] 
**is_online** | **bool** | Indicates if API revision is accessible via the gateway. | [optional] 
**subscription_key_parameter_names** | [**ProductApiCreateOrUpdate200ResponseAllOfAllOfSubscriptionKeyParameterNames**](ProductApiCreateOrUpdate200ResponseAllOfAllOfSubscriptionKeyParameterNames.md) |  | [optional] 
**type** | **str** | Type of API. | [optional] 

## Example

```python
from openapi_client.models.product_api_create_or_update200_response import ProductApiCreateOrUpdate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductApiCreateOrUpdate200Response from a JSON string
product_api_create_or_update200_response_instance = ProductApiCreateOrUpdate200Response.from_json(json)
# print the JSON string representation of the object
print(ProductApiCreateOrUpdate200Response.to_json())

# convert the object into a dict
product_api_create_or_update200_response_dict = product_api_create_or_update200_response_instance.to_dict()
# create an instance of ProductApiCreateOrUpdate200Response from a dict
product_api_create_or_update200_response_from_dict = ProductApiCreateOrUpdate200Response.from_dict(product_api_create_or_update200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


