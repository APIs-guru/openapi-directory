# KeyData

Represents a public key data along with its format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | Output only. The format of the key. | [optional] [readonly] 
**key** | **str** | Output only. The key data. The format of the key is represented by the format field. | [optional] [readonly] 
**key_spec** | **str** | Required. The specifications for the key. | [optional] 
**not_after_time** | **str** | Output only. Latest timestamp when this key is valid. Attempts to use this key after this time will fail. Only present if the key data represents a X.509 certificate. | [optional] [readonly] 
**not_before_time** | **str** | Output only. Earliest timestamp when this key is valid. Attempts to use this key before this time will fail. Only present if the key data represents a X.509 certificate. | [optional] [readonly] 

## Example

```python
from openapi_client.models.key_data import KeyData

# TODO update the JSON string below
json = "{}"
# create an instance of KeyData from a JSON string
key_data_instance = KeyData.from_json(json)
# print the JSON string representation of the object
print(KeyData.to_json())

# convert the object into a dict
key_data_dict = key_data_instance.to_dict()
# create an instance of KeyData from a dict
key_data_from_dict = KeyData.from_dict(key_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


