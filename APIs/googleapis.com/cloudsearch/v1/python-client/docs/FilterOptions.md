# FilterOptions

Filter options to be applied on query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**Filter**](Filter.md) |  | [optional] 
**object_type** | **str** | If object_type is set, only objects of that type are returned. This should correspond to the name of the object that was registered within the definition of schema. The maximum length is 256 characters. | [optional] 

## Example

```python
from openapi_client.models.filter_options import FilterOptions

# TODO update the JSON string below
json = "{}"
# create an instance of FilterOptions from a JSON string
filter_options_instance = FilterOptions.from_json(json)
# print the JSON string representation of the object
print(FilterOptions.to_json())

# convert the object into a dict
filter_options_dict = filter_options_instance.to_dict()
# create an instance of FilterOptions from a dict
filter_options_from_dict = FilterOptions.from_dict(filter_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


