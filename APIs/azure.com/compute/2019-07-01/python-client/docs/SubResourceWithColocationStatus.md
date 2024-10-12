# SubResourceWithColocationStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colocation_status** | [**InstanceViewStatus**](InstanceViewStatus.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.sub_resource_with_colocation_status import SubResourceWithColocationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SubResourceWithColocationStatus from a JSON string
sub_resource_with_colocation_status_instance = SubResourceWithColocationStatus.from_json(json)
# print the JSON string representation of the object
print(SubResourceWithColocationStatus.to_json())

# convert the object into a dict
sub_resource_with_colocation_status_dict = sub_resource_with_colocation_status_instance.to_dict()
# create an instance of SubResourceWithColocationStatus from a dict
sub_resource_with_colocation_status_from_dict = SubResourceWithColocationStatus.from_dict(sub_resource_with_colocation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


