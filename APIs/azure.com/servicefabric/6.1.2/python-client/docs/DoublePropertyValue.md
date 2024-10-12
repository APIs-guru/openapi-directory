# DoublePropertyValue

Describes a Service Fabric property value of type Double.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **float** | The data of the property value. | 

## Example

```python
from openapi_client.models.double_property_value import DoublePropertyValue

# TODO update the JSON string below
json = "{}"
# create an instance of DoublePropertyValue from a JSON string
double_property_value_instance = DoublePropertyValue.from_json(json)
# print the JSON string representation of the object
print(DoublePropertyValue.to_json())

# convert the object into a dict
double_property_value_dict = double_property_value_instance.to_dict()
# create an instance of DoublePropertyValue from a dict
double_property_value_from_dict = DoublePropertyValue.from_dict(double_property_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


