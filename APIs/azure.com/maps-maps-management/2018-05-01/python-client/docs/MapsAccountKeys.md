# MapsAccountKeys

The set of keys which can be used to access the Maps REST APIs. Two keys are provided for key rotation without interruption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The full Azure resource identifier of the Maps Account. | [optional] [readonly] 
**primary_key** | **str** | The primary key for accessing the Maps REST APIs. | [optional] [readonly] 
**secondary_key** | **str** | The secondary key for accessing the Maps REST APIs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.maps_account_keys import MapsAccountKeys

# TODO update the JSON string below
json = "{}"
# create an instance of MapsAccountKeys from a JSON string
maps_account_keys_instance = MapsAccountKeys.from_json(json)
# print the JSON string representation of the object
print(MapsAccountKeys.to_json())

# convert the object into a dict
maps_account_keys_dict = maps_account_keys_instance.to_dict()
# create an instance of MapsAccountKeys from a dict
maps_account_keys_from_dict = MapsAccountKeys.from_dict(maps_account_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


