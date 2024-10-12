# ManagementGroupPathElement

A path element of a management group ancestors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The friendly name of the group. | [optional] 
**name** | **str** | The name of the group. | [optional] 

## Example

```python
from openapi_client.models.management_group_path_element import ManagementGroupPathElement

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementGroupPathElement from a JSON string
management_group_path_element_instance = ManagementGroupPathElement.from_json(json)
# print the JSON string representation of the object
print(ManagementGroupPathElement.to_json())

# convert the object into a dict
management_group_path_element_dict = management_group_path_element_instance.to_dict()
# create an instance of ManagementGroupPathElement from a dict
management_group_path_element_from_dict = ManagementGroupPathElement.from_dict(management_group_path_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


