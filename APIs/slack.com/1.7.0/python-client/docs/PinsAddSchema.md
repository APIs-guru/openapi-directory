# PinsAddSchema

Schema for successful response from pins.add method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.pins_add_schema import PinsAddSchema

# TODO update the JSON string below
json = "{}"
# create an instance of PinsAddSchema from a JSON string
pins_add_schema_instance = PinsAddSchema.from_json(json)
# print the JSON string representation of the object
print(PinsAddSchema.to_json())

# convert the object into a dict
pins_add_schema_dict = pins_add_schema_instance.to_dict()
# create an instance of PinsAddSchema from a dict
pins_add_schema_from_dict = PinsAddSchema.from_dict(pins_add_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


