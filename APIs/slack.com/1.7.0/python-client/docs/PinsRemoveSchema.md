# PinsRemoveSchema

Schema for successful response from pins.remove method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.pins_remove_schema import PinsRemoveSchema

# TODO update the JSON string below
json = "{}"
# create an instance of PinsRemoveSchema from a JSON string
pins_remove_schema_instance = PinsRemoveSchema.from_json(json)
# print the JSON string representation of the object
print(PinsRemoveSchema.to_json())

# convert the object into a dict
pins_remove_schema_dict = pins_remove_schema_instance.to_dict()
# create an instance of PinsRemoveSchema from a dict
pins_remove_schema_from_dict = PinsRemoveSchema.from_dict(pins_remove_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


