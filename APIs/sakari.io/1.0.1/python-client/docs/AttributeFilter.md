# AttributeFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparator** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.attribute_filter import AttributeFilter

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeFilter from a JSON string
attribute_filter_instance = AttributeFilter.from_json(json)
# print the JSON string representation of the object
print(AttributeFilter.to_json())

# convert the object into a dict
attribute_filter_dict = attribute_filter_instance.to_dict()
# create an instance of AttributeFilter from a dict
attribute_filter_from_dict = AttributeFilter.from_dict(attribute_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


