# PatchLocationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] [default to True]
**address** | [**PatchLocationRequestAddress**](PatchLocationRequestAddress.md) |  | [optional] 
**chargestations** | **List[object]** |  | [optional] 
**coordinates** | [**PatchLocationRequestCoordinates**](PatchLocationRequestCoordinates.md) |  | [optional] 
**opening_hours** | [**PatchLocationRequestOpeningHours**](PatchLocationRequestOpeningHours.md) |  | [optional] 
**operator_name** | **str** |  | [optional] 
**timezone** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.patch_location_request import PatchLocationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchLocationRequest from a JSON string
patch_location_request_instance = PatchLocationRequest.from_json(json)
# print the JSON string representation of the object
print(PatchLocationRequest.to_json())

# convert the object into a dict
patch_location_request_dict = patch_location_request_instance.to_dict()
# create an instance of PatchLocationRequest from a dict
patch_location_request_from_dict = PatchLocationRequest.from_dict(patch_location_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


