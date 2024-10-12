# AppResource

App resource payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AppResourceProperties**](AppResourceProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_resource import AppResource

# TODO update the JSON string below
json = "{}"
# create an instance of AppResource from a JSON string
app_resource_instance = AppResource.from_json(json)
# print the JSON string representation of the object
print(AppResource.to_json())

# convert the object into a dict
app_resource_dict = app_resource_instance.to_dict()
# create an instance of AppResource from a dict
app_resource_from_dict = AppResource.from_dict(app_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


