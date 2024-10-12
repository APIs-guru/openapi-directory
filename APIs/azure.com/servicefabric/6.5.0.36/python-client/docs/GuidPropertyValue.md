# GuidPropertyValue

Describes a Service Fabric property value of type Guid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | The data of the property value. | 

## Example

```python
from openapi_client.models.guid_property_value import GuidPropertyValue

# TODO update the JSON string below
json = "{}"
# create an instance of GuidPropertyValue from a JSON string
guid_property_value_instance = GuidPropertyValue.from_json(json)
# print the JSON string representation of the object
print(GuidPropertyValue.to_json())

# convert the object into a dict
guid_property_value_dict = guid_property_value_instance.to_dict()
# create an instance of GuidPropertyValue from a dict
guid_property_value_from_dict = GuidPropertyValue.from_dict(guid_property_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


