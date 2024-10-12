# V3StopAmenityDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**car_parking** | **str** | The number of free car parking spots at the stop | [optional] 
**cctv** | **bool** | Indicates if there are CCTV (i.e. closed circuit television) cameras at the stop | [optional] 
**taxi_rank** | **bool** | Indicates if there is a taxi rank at or near the stop | [optional] 
**toilet** | **bool** | Indicates if there is a public toilet at or near the stop | [optional] 

## Example

```python
from openapi_client.models.v3_stop_amenity_details import V3StopAmenityDetails

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopAmenityDetails from a JSON string
v3_stop_amenity_details_instance = V3StopAmenityDetails.from_json(json)
# print the JSON string representation of the object
print(V3StopAmenityDetails.to_json())

# convert the object into a dict
v3_stop_amenity_details_dict = v3_stop_amenity_details_instance.to_dict()
# create an instance of V3StopAmenityDetails from a dict
v3_stop_amenity_details_from_dict = V3StopAmenityDetails.from_dict(v3_stop_amenity_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


