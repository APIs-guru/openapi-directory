# OtoroshiHealth

The structure that represent current Otoroshi health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datastore** | **str** |  | 
**otoroshi** | **str** |  | 

## Example

```python
from openapi_client.models.otoroshi_health import OtoroshiHealth

# TODO update the JSON string below
json = "{}"
# create an instance of OtoroshiHealth from a JSON string
otoroshi_health_instance = OtoroshiHealth.from_json(json)
# print the JSON string representation of the object
print(OtoroshiHealth.to_json())

# convert the object into a dict
otoroshi_health_dict = otoroshi_health_instance.to_dict()
# create an instance of OtoroshiHealth from a dict
otoroshi_health_from_dict = OtoroshiHealth.from_dict(otoroshi_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


