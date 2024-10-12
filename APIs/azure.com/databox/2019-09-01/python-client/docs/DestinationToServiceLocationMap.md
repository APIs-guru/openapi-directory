# DestinationToServiceLocationMap

Map of destination location to service location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_location** | **str** | Location of the destination. | [optional] [readonly] 
**service_location** | **str** | Location of the service. | [optional] [readonly] 

## Example

```python
from openapi_client.models.destination_to_service_location_map import DestinationToServiceLocationMap

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationToServiceLocationMap from a JSON string
destination_to_service_location_map_instance = DestinationToServiceLocationMap.from_json(json)
# print the JSON string representation of the object
print(DestinationToServiceLocationMap.to_json())

# convert the object into a dict
destination_to_service_location_map_dict = destination_to_service_location_map_instance.to_dict()
# create an instance of DestinationToServiceLocationMap from a dict
destination_to_service_location_map_from_dict = DestinationToServiceLocationMap.from_dict(destination_to_service_location_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


