# FloodlightActivitiesListResponse

Floodlight Activity List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**floodlight_activities** | [**List[FloodlightActivity]**](FloodlightActivity.md) | Floodlight activity collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#floodlightActivitiesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.floodlight_activities_list_response import FloodlightActivitiesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FloodlightActivitiesListResponse from a JSON string
floodlight_activities_list_response_instance = FloodlightActivitiesListResponse.from_json(json)
# print the JSON string representation of the object
print(FloodlightActivitiesListResponse.to_json())

# convert the object into a dict
floodlight_activities_list_response_dict = floodlight_activities_list_response_instance.to_dict()
# create an instance of FloodlightActivitiesListResponse from a dict
floodlight_activities_list_response_from_dict = FloodlightActivitiesListResponse.from_dict(floodlight_activities_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


