# FilterParentLink

Parent link for this filter. Points to the account to which this filter belongs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link to the account to which this filter belongs. | [optional] 
**type** | **str** | Value is \&quot;analytics#account\&quot;. | [optional] [default to 'analytics#account']

## Example

```python
from openapi_client.models.filter_parent_link import FilterParentLink

# TODO update the JSON string below
json = "{}"
# create an instance of FilterParentLink from a JSON string
filter_parent_link_instance = FilterParentLink.from_json(json)
# print the JSON string representation of the object
print(FilterParentLink.to_json())

# convert the object into a dict
filter_parent_link_dict = filter_parent_link_instance.to_dict()
# create an instance of FilterParentLink from a dict
filter_parent_link_from_dict = FilterParentLink.from_dict(filter_parent_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


