# StructuredDataObject

A structured data object consisting of named properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**List[NamedProperty]**](NamedProperty.md) | The properties for the object. The maximum number of elements is 1000. | [optional] 

## Example

```python
from openapi_client.models.structured_data_object import StructuredDataObject

# TODO update the JSON string below
json = "{}"
# create an instance of StructuredDataObject from a JSON string
structured_data_object_instance = StructuredDataObject.from_json(json)
# print the JSON string representation of the object
print(StructuredDataObject.to_json())

# convert the object into a dict
structured_data_object_dict = structured_data_object_instance.to_dict()
# create an instance of StructuredDataObject from a dict
structured_data_object_from_dict = StructuredDataObject.from_dict(structured_data_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


