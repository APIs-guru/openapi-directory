# ResourceStatus

Message describing resource status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules_newer_versions** | **List[str]** | Historical: Used before 2023-05-22 the new version of rule id if exists | [optional] 
**state** | **str** | State of the resource | [optional] 

## Example

```python
from openapi_client.models.resource_status import ResourceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceStatus from a JSON string
resource_status_instance = ResourceStatus.from_json(json)
# print the JSON string representation of the object
print(ResourceStatus.to_json())

# convert the object into a dict
resource_status_dict = resource_status_instance.to_dict()
# create an instance of ResourceStatus from a dict
resource_status_from_dict = ResourceStatus.from_dict(resource_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


