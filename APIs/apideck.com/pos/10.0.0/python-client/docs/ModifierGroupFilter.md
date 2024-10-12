# ModifierGroupFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modifier_group_id** | **str** | Id of the job to filter on | [optional] 

## Example

```python
from openapi_client.models.modifier_group_filter import ModifierGroupFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ModifierGroupFilter from a JSON string
modifier_group_filter_instance = ModifierGroupFilter.from_json(json)
# print the JSON string representation of the object
print(ModifierGroupFilter.to_json())

# convert the object into a dict
modifier_group_filter_dict = modifier_group_filter_instance.to_dict()
# create an instance of ModifierGroupFilter from a dict
modifier_group_filter_from_dict = ModifierGroupFilter.from_dict(modifier_group_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


