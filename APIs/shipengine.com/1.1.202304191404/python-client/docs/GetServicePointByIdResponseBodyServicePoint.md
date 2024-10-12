# GetServicePointByIdResponseBodyServicePoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** |  | [optional] 
**carrier_code** | **str** |  | [optional] 
**city_locality** | **str** |  | [optional] 
**company_name** | **str** |  | [optional] 
**country_code** | **str** |  | [optional] 
**features** | **List[str]** |  | [optional] 
**hours_of_operation** | [**GetServicePointByIdResponseBodyServicePointHoursOfOperation**](GetServicePointByIdResponseBodyServicePointHoursOfOperation.md) |  | [optional] 
**lat** | **float** |  | [optional] 
**long** | **float** |  | [optional] 
**phone_number** | **str** |  | [optional] 
**postal_code** | **str** |  | [optional] 
**service_codes** | **List[str]** |  | [optional] 
**service_point_id** | **str** |  | [optional] 
**state_province** | **str** |  | [optional] 
**type** | **str** |  | [optional] [default to 'pudo']

## Example

```python
from openapi_client.models.get_service_point_by_id_response_body_service_point import GetServicePointByIdResponseBodyServicePoint

# TODO update the JSON string below
json = "{}"
# create an instance of GetServicePointByIdResponseBodyServicePoint from a JSON string
get_service_point_by_id_response_body_service_point_instance = GetServicePointByIdResponseBodyServicePoint.from_json(json)
# print the JSON string representation of the object
print(GetServicePointByIdResponseBodyServicePoint.to_json())

# convert the object into a dict
get_service_point_by_id_response_body_service_point_dict = get_service_point_by_id_response_body_service_point_instance.to_dict()
# create an instance of GetServicePointByIdResponseBodyServicePoint from a dict
get_service_point_by_id_response_body_service_point_from_dict = GetServicePointByIdResponseBodyServicePoint.from_dict(get_service_point_by_id_response_body_service_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


