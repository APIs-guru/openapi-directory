# IntegrationResourceUpdateInfo

IoTHub integration resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IntegrationResourceUpdateProperties**](IntegrationResourceUpdateProperties.md) |  | [optional] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | Extension resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.integration_resource_update_info import IntegrationResourceUpdateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationResourceUpdateInfo from a JSON string
integration_resource_update_info_instance = IntegrationResourceUpdateInfo.from_json(json)
# print the JSON string representation of the object
print(IntegrationResourceUpdateInfo.to_json())

# convert the object into a dict
integration_resource_update_info_dict = integration_resource_update_info_instance.to_dict()
# create an instance of IntegrationResourceUpdateInfo from a dict
integration_resource_update_info_from_dict = IntegrationResourceUpdateInfo.from_dict(integration_resource_update_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


