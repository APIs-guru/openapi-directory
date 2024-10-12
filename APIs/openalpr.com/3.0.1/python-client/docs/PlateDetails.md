# PlateDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates** | [**List[PlateCandidate]**](PlateCandidate.md) | All the top N candidates that could be the correct plate number | [optional] 
**confidence** | **float** | Confidence percentage that the plate number is correct | [optional] 
**coordinates** | [**List[Coordinate]**](Coordinate.md) | The X/Y coordinates of the license plate in the image Four coordinates are provided that form a polygon starting from the top-left and moving clockwise ending in the bottom left  | [optional] 
**matches_template** | **int** | Indicates whether the plate matched a regional text pattern | [optional] 
**plate** | **str** | Best plate number for this plate | [optional] 
**processing_time_ms** | **float** | Number of milliseconds to process the license plate | [optional] 
**region** | **str** | Specified or detected region (e.g., tx for Texas) | [optional] 
**region_confidence** | **float** | Confidence percentage that the plate region is correct | [optional] 
**requested_topn** | **int** | The max number of results requested | [optional] 
**vehicle** | [**VehicleDetails**](VehicleDetails.md) |  | [optional] 
**vehicle_region** | [**RegionOfInterest**](RegionOfInterest.md) |  | [optional] 

## Example

```python
from openapi_client.models.plate_details import PlateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PlateDetails from a JSON string
plate_details_instance = PlateDetails.from_json(json)
# print the JSON string representation of the object
print(PlateDetails.to_json())

# convert the object into a dict
plate_details_dict = plate_details_instance.to_dict()
# create an instance of PlateDetails from a dict
plate_details_from_dict = PlateDetails.from_dict(plate_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


