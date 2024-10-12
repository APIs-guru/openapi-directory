# BinaryPropertyValue

Describes a Service Fabric property value of type Binary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List[int]** | Array of bytes to be sent as an integer array. Each element of array is a number between 0 and 255. | 

## Example

```python
from openapi_client.models.binary_property_value import BinaryPropertyValue

# TODO update the JSON string below
json = "{}"
# create an instance of BinaryPropertyValue from a JSON string
binary_property_value_instance = BinaryPropertyValue.from_json(json)
# print the JSON string representation of the object
print(BinaryPropertyValue.to_json())

# convert the object into a dict
binary_property_value_dict = binary_property_value_instance.to_dict()
# create an instance of BinaryPropertyValue from a dict
binary_property_value_from_dict = BinaryPropertyValue.from_dict(binary_property_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


