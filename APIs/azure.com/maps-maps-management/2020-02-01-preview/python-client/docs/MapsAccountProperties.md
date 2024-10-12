# MapsAccountProperties

Additional Map account properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x_ms_client_id** | **str** | A unique identifier for the maps account | [optional] 

## Example

```python
from openapi_client.models.maps_account_properties import MapsAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MapsAccountProperties from a JSON string
maps_account_properties_instance = MapsAccountProperties.from_json(json)
# print the JSON string representation of the object
print(MapsAccountProperties.to_json())

# convert the object into a dict
maps_account_properties_dict = maps_account_properties_instance.to_dict()
# create an instance of MapsAccountProperties from a dict
maps_account_properties_from_dict = MapsAccountProperties.from_dict(maps_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


