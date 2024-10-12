# Value

A message that can hold any of the supported value types and associated metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array_value** | [**ArrayValue**](ArrayValue.md) |  | [optional] 
**blob_value** | **bytearray** | A blob value. May have at most 1,000,000 bytes. When &#x60;exclude_from_indexes&#x60; is false, may have at most 1500 bytes. In JSON requests, must be base64-encoded. | [optional] 
**boolean_value** | **bool** | A boolean value. | [optional] 
**double_value** | **float** | A double value. | [optional] 
**entity_value** | [**Entity**](Entity.md) |  | [optional] 
**exclude_from_indexes** | **bool** | If the value should be excluded from all indexes including those defined explicitly. | [optional] 
**geo_point_value** | [**LatLng**](LatLng.md) |  | [optional] 
**integer_value** | **str** | An integer value. | [optional] 
**key_value** | [**Key**](Key.md) |  | [optional] 
**meaning** | **int** | The &#x60;meaning&#x60; field should only be populated for backwards compatibility. | [optional] 
**null_value** | **str** | A null value. | [optional] 
**string_value** | **str** | A UTF-8 encoded string value. When &#x60;exclude_from_indexes&#x60; is false (it is indexed) , may have at most 1500 bytes. Otherwise, may be set to at most 1,000,000 bytes. | [optional] 
**timestamp_value** | **str** | A timestamp value. When stored in the Datastore, precise only to microseconds; any additional precision is rounded down. | [optional] 

## Example

```python
from openapi_client.models.value import Value

# TODO update the JSON string below
json = "{}"
# create an instance of Value from a JSON string
value_instance = Value.from_json(json)
# print the JSON string representation of the object
print(Value.to_json())

# convert the object into a dict
value_dict = value_instance.to_dict()
# create an instance of Value from a dict
value_from_dict = Value.from_dict(value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


