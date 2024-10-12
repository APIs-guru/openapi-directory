# ApiContractUpdateProperties

API update contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | API name. | [optional] 
**path** | **str** | Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API. | [optional] 
**protocols** | **List[str]** | Describes on which protocols the operations in this API can be invoked. | [optional] 
**service_url** | **str** | Absolute URL of the backend service implementing this API. | [optional] 
**api_revision** | **str** | Describes the Revision of the Api. If no value is provided, default revision 1 is created | [optional] 
**api_revision_description** | **str** | Description of the Api Revision. | [optional] 
**api_version** | **str** | Indicates the Version identifier of the API if the API is versioned | [optional] 
**api_version_description** | **str** | Description of the Api Version. | [optional] 
**api_version_set_id** | **str** | A resource identifier for the related ApiVersionSet. | [optional] 
**authentication_settings** | [**ApiEntityBaseContractAuthenticationSettings**](ApiEntityBaseContractAuthenticationSettings.md) |  | [optional] 
**description** | **str** | Description of the API. May include HTML formatting tags. | [optional] 
**is_current** | **bool** | Indicates if API revision is current api revision. | [optional] [readonly] 
**is_online** | **bool** | Indicates if API revision is accessible via the gateway. | [optional] [readonly] 
**subscription_key_parameter_names** | [**ApiEntityBaseContractSubscriptionKeyParameterNames**](ApiEntityBaseContractSubscriptionKeyParameterNames.md) |  | [optional] 
**type** | **str** | Type of API. | [optional] 

## Example

```python
from openapi_client.models.api_contract_update_properties import ApiContractUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiContractUpdateProperties from a JSON string
api_contract_update_properties_instance = ApiContractUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ApiContractUpdateProperties.to_json())

# convert the object into a dict
api_contract_update_properties_dict = api_contract_update_properties_instance.to_dict()
# create an instance of ApiContractUpdateProperties from a dict
api_contract_update_properties_from_dict = ApiContractUpdateProperties.from_dict(api_contract_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


