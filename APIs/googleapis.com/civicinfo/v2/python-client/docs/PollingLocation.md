# PollingLocation

A location where a voter can vote. This may be an early vote site, an election day voting location, or a drop off location for a completed ballot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**SimpleAddressType**](SimpleAddressType.md) |  | [optional] 
**end_date** | **str** | The last date that this early vote site or drop off location may be used. This field is not populated for polling locations. | [optional] 
**latitude** | **float** | Latitude of the location, in degrees north of the equator. Note this field may not be available for some locations. | [optional] 
**longitude** | **float** | Longitude of the location, in degrees east of the Prime Meridian. Note this field may not be available for some locations. | [optional] 
**name** | **str** | The name of the early vote site or drop off location. This field is not populated for polling locations. | [optional] 
**notes** | **str** | Notes about this location (e.g. accessibility ramp or entrance to use). | [optional] 
**polling_hours** | **str** | A description of when this location is open. | [optional] 
**sources** | [**List[Source]**](Source.md) | A list of sources for this location. If multiple sources are listed the data has been aggregated from those sources. | [optional] 
**start_date** | **str** | The first date that this early vote site or drop off location may be used. This field is not populated for polling locations. | [optional] 
**voter_services** | **str** | The services provided by this early vote site or drop off location. This field is not populated for polling locations. | [optional] 

## Example

```python
from openapi_client.models.polling_location import PollingLocation

# TODO update the JSON string below
json = "{}"
# create an instance of PollingLocation from a JSON string
polling_location_instance = PollingLocation.from_json(json)
# print the JSON string representation of the object
print(PollingLocation.to_json())

# convert the object into a dict
polling_location_dict = polling_location_instance.to_dict()
# create an instance of PollingLocation from a dict
polling_location_from_dict = PollingLocation.from_dict(polling_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


