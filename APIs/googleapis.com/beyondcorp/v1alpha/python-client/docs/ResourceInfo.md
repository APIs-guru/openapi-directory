# ResourceInfo

ResourceInfo represents the information/status of the associated resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Required. Unique Id for the resource. | [optional] 
**resource** | **Dict[str, object]** | Specific details for the resource. | [optional] 
**status** | **str** | Overall health status. Overall status is derived based on the status of each sub level resources. | [optional] 
**sub** | [**List[ResourceInfo]**](ResourceInfo.md) | List of Info for the sub level resources. | [optional] 
**time** | **str** | The timestamp to collect the info. It is suggested to be set by the topmost level resource only. | [optional] 

## Example

```python
from openapi_client.models.resource_info import ResourceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceInfo from a JSON string
resource_info_instance = ResourceInfo.from_json(json)
# print the JSON string representation of the object
print(ResourceInfo.to_json())

# convert the object into a dict
resource_info_dict = resource_info_instance.to_dict()
# create an instance of ResourceInfo from a dict
resource_info_from_dict = ResourceInfo.from_dict(resource_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


