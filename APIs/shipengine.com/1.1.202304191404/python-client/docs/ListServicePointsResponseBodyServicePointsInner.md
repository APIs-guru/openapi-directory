# ListServicePointsResponseBodyServicePointsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** |  | [optional] 
**carrier_code** | **str** |  | [optional] 
**city_locality** | **str** |  | [optional] 
**company_name** | **str** |  | [optional] 
**country_code** | **str** |  | [optional] 
**distance_in_meters** | **float** |  | [optional] 
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
from openapi_client.models.list_service_points_response_body_service_points_inner import ListServicePointsResponseBodyServicePointsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListServicePointsResponseBodyServicePointsInner from a JSON string
list_service_points_response_body_service_points_inner_instance = ListServicePointsResponseBodyServicePointsInner.from_json(json)
# print the JSON string representation of the object
print(ListServicePointsResponseBodyServicePointsInner.to_json())

# convert the object into a dict
list_service_points_response_body_service_points_inner_dict = list_service_points_response_body_service_points_inner_instance.to_dict()
# create an instance of ListServicePointsResponseBodyServicePointsInner from a dict
list_service_points_response_body_service_points_inner_from_dict = ListServicePointsResponseBodyServicePointsInner.from_dict(list_service_points_response_body_service_points_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


