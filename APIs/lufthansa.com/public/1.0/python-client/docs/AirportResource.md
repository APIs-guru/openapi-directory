# AirportResource

Root element of airport response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airports** | [**AirportResourceAirports**](AirportResourceAirports.md) |  | [optional] 
**meta** | [**AirportResourceMeta**](AirportResourceMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.airport_resource import AirportResource

# TODO update the JSON string below
json = "{}"
# create an instance of AirportResource from a JSON string
airport_resource_instance = AirportResource.from_json(json)
# print the JSON string representation of the object
print(AirportResource.to_json())

# convert the object into a dict
airport_resource_dict = airport_resource_instance.to_dict()
# create an instance of AirportResource from a dict
airport_resource_from_dict = AirportResource.from_dict(airport_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


