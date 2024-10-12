# GenericResourceFilter

Resource filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_type** | **str** | Gets or sets the resource type. | [optional] 
**tagname** | **str** | Gets or sets the tag name. | [optional] 
**tagvalue** | **str** | Gets or sets the tag value. | [optional] 

## Example

```python
from openapi_client.models.generic_resource_filter import GenericResourceFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GenericResourceFilter from a JSON string
generic_resource_filter_instance = GenericResourceFilter.from_json(json)
# print the JSON string representation of the object
print(GenericResourceFilter.to_json())

# convert the object into a dict
generic_resource_filter_dict = generic_resource_filter_instance.to_dict()
# create an instance of GenericResourceFilter from a dict
generic_resource_filter_from_dict = GenericResourceFilter.from_dict(generic_resource_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


