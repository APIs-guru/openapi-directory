# GetGoogleUpdatedLodgingResponse

Response message for LodgingService.GetGoogleUpdatedLodging

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**diff_mask** | **str** | Required. The fields in the Lodging that have been updated by Google. Repeated field items are not individually specified. | [optional] 
**lodging** | [**Lodging**](Lodging.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_google_updated_lodging_response import GetGoogleUpdatedLodgingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetGoogleUpdatedLodgingResponse from a JSON string
get_google_updated_lodging_response_instance = GetGoogleUpdatedLodgingResponse.from_json(json)
# print the JSON string representation of the object
print(GetGoogleUpdatedLodgingResponse.to_json())

# convert the object into a dict
get_google_updated_lodging_response_dict = get_google_updated_lodging_response_instance.to_dict()
# create an instance of GetGoogleUpdatedLodgingResponse from a dict
get_google_updated_lodging_response_from_dict = GetGoogleUpdatedLodgingResponse.from_dict(get_google_updated_lodging_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


