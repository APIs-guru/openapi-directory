# GetServicePointByIdResponseBodyServicePointHoursOfOperation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friday** | [**List[GetServicePointByIdResponseBodyServicePointHoursOfOperationFridayInner]**](GetServicePointByIdResponseBodyServicePointHoursOfOperationFridayInner.md) |  | [optional] 
**monday** | [**List[GetServicePointByIdResponseBodyServicePointHoursOfOperationFridayInner]**](GetServicePointByIdResponseBodyServicePointHoursOfOperationFridayInner.md) |  | [optional] 
**saturday** | [**List[GetServicePointByIdResponseBodyServicePointHoursOfOperationFridayInner]**](GetServicePointByIdResponseBodyServicePointHoursOfOperationFridayInner.md) |  | [optional] 
**sunday** | [**List[GetServicePointByIdResponseBodyServicePointHoursOfOperationFridayInner]**](GetServicePointByIdResponseBodyServicePointHoursOfOperationFridayInner.md) |  | [optional] 
**thursday** | [**List[GetServicePointByIdResponseBodyServicePointHoursOfOperationFridayInner]**](GetServicePointByIdResponseBodyServicePointHoursOfOperationFridayInner.md) |  | [optional] 
**tuesday** | [**List[GetServicePointByIdResponseBodyServicePointHoursOfOperationFridayInner]**](GetServicePointByIdResponseBodyServicePointHoursOfOperationFridayInner.md) |  | [optional] 
**wednesday** | [**List[GetServicePointByIdResponseBodyServicePointHoursOfOperationFridayInner]**](GetServicePointByIdResponseBodyServicePointHoursOfOperationFridayInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_service_point_by_id_response_body_service_point_hours_of_operation import GetServicePointByIdResponseBodyServicePointHoursOfOperation

# TODO update the JSON string below
json = "{}"
# create an instance of GetServicePointByIdResponseBodyServicePointHoursOfOperation from a JSON string
get_service_point_by_id_response_body_service_point_hours_of_operation_instance = GetServicePointByIdResponseBodyServicePointHoursOfOperation.from_json(json)
# print the JSON string representation of the object
print(GetServicePointByIdResponseBodyServicePointHoursOfOperation.to_json())

# convert the object into a dict
get_service_point_by_id_response_body_service_point_hours_of_operation_dict = get_service_point_by_id_response_body_service_point_hours_of_operation_instance.to_dict()
# create an instance of GetServicePointByIdResponseBodyServicePointHoursOfOperation from a dict
get_service_point_by_id_response_body_service_point_hours_of_operation_from_dict = GetServicePointByIdResponseBodyServicePointHoursOfOperation.from_dict(get_service_point_by_id_response_body_service_point_hours_of_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


