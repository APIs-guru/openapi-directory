# FlightClassListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**resources** | [**List[FlightClass]**](FlightClass.md) | Resources corresponding to the list request. | [optional] 

## Example

```python
from openapi_client.models.flight_class_list_response import FlightClassListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FlightClassListResponse from a JSON string
flight_class_list_response_instance = FlightClassListResponse.from_json(json)
# print the JSON string representation of the object
print(FlightClassListResponse.to_json())

# convert the object into a dict
flight_class_list_response_dict = flight_class_list_response_instance.to_dict()
# create an instance of FlightClassListResponse from a dict
flight_class_list_response_from_dict = FlightClassListResponse.from_dict(flight_class_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


