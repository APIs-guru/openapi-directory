# DescendantInfo

The descendant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The fully qualified ID for the descendant.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000 or /subscriptions/0000000-0000-0000-0000-000000000000 | [optional] [readonly] 
**name** | **str** | The name of the descendant. For example, 00000000-0000-0000-0000-000000000000 | [optional] [readonly] 
**properties** | [**DescendantInfoProperties**](DescendantInfoProperties.md) |  | [optional] 
**type** | **str** | The type of the resource. For example, /providers/Microsoft.Management/managementGroups or /subscriptions | [optional] [readonly] 

## Example

```python
from openapi_client.models.descendant_info import DescendantInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DescendantInfo from a JSON string
descendant_info_instance = DescendantInfo.from_json(json)
# print the JSON string representation of the object
print(DescendantInfo.to_json())

# convert the object into a dict
descendant_info_dict = descendant_info_instance.to_dict()
# create an instance of DescendantInfo from a dict
descendant_info_from_dict = DescendantInfo.from_dict(descendant_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


