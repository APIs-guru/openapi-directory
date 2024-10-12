# UpdatereservationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector** | **int** |  | [optional] 
**driver** | **str** |  | [optional] 
**end_date** | **str** |  | [optional] 
**evse** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.updatereservation_request import UpdatereservationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatereservationRequest from a JSON string
updatereservation_request_instance = UpdatereservationRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatereservationRequest.to_json())

# convert the object into a dict
updatereservation_request_dict = updatereservation_request_instance.to_dict()
# create an instance of UpdatereservationRequest from a dict
updatereservation_request_from_dict = UpdatereservationRequest.from_dict(updatereservation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


