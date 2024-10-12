# ResourceGroupFilter

Resource group filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag_name** | **str** | Gets or sets the tag name. | [optional] 
**tag_value** | **str** | Gets or sets the tag value. | [optional] 

## Example

```python
from openapi_client.models.resource_group_filter import ResourceGroupFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceGroupFilter from a JSON string
resource_group_filter_instance = ResourceGroupFilter.from_json(json)
# print the JSON string representation of the object
print(ResourceGroupFilter.to_json())

# convert the object into a dict
resource_group_filter_dict = resource_group_filter_instance.to_dict()
# create an instance of ResourceGroupFilter from a dict
resource_group_filter_from_dict = ResourceGroupFilter.from_dict(resource_group_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


