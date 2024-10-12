# FlightObjectListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**resources** | [**List[FlightObject]**](FlightObject.md) | Resources corresponding to the list request. | [optional] 

## Example

```python
from openapi_client.models.flight_object_list_response import FlightObjectListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FlightObjectListResponse from a JSON string
flight_object_list_response_instance = FlightObjectListResponse.from_json(json)
# print the JSON string representation of the object
print(FlightObjectListResponse.to_json())

# convert the object into a dict
flight_object_list_response_dict = flight_object_list_response_instance.to_dict()
# create an instance of FlightObjectListResponse from a dict
flight_object_list_response_from_dict = FlightObjectListResponse.from_dict(flight_object_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


