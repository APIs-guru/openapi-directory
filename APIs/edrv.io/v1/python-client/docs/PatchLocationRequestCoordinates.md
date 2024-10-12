# PatchLocationRequestCoordinates


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latitude** | **float** |  | [optional] 
**longitude** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.patch_location_request_coordinates import PatchLocationRequestCoordinates

# TODO update the JSON string below
json = "{}"
# create an instance of PatchLocationRequestCoordinates from a JSON string
patch_location_request_coordinates_instance = PatchLocationRequestCoordinates.from_json(json)
# print the JSON string representation of the object
print(PatchLocationRequestCoordinates.to_json())

# convert the object into a dict
patch_location_request_coordinates_dict = patch_location_request_coordinates_instance.to_dict()
# create an instance of PatchLocationRequestCoordinates from a dict
patch_location_request_coordinates_from_dict = PatchLocationRequestCoordinates.from_dict(patch_location_request_coordinates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


