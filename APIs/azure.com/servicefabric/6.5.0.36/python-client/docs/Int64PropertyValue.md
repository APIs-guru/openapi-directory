# Int64PropertyValue

Describes a Service Fabric property value of type Int64.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | The data of the property value. | 

## Example

```python
from openapi_client.models.int64_property_value import Int64PropertyValue

# TODO update the JSON string below
json = "{}"
# create an instance of Int64PropertyValue from a JSON string
int64_property_value_instance = Int64PropertyValue.from_json(json)
# print the JSON string representation of the object
print(Int64PropertyValue.to_json())

# convert the object into a dict
int64_property_value_dict = int64_property_value_instance.to_dict()
# create an instance of Int64PropertyValue from a dict
int64_property_value_from_dict = Int64PropertyValue.from_dict(int64_property_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


