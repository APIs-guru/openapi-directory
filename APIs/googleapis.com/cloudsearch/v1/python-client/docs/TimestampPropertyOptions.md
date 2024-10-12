# TimestampPropertyOptions

The options for timestamp properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator_options** | [**TimestampOperatorOptions**](TimestampOperatorOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.timestamp_property_options import TimestampPropertyOptions

# TODO update the JSON string below
json = "{}"
# create an instance of TimestampPropertyOptions from a JSON string
timestamp_property_options_instance = TimestampPropertyOptions.from_json(json)
# print the JSON string representation of the object
print(TimestampPropertyOptions.to_json())

# convert the object into a dict
timestamp_property_options_dict = timestamp_property_options_instance.to_dict()
# create an instance of TimestampPropertyOptions from a dict
timestamp_property_options_from_dict = TimestampPropertyOptions.from_dict(timestamp_property_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


