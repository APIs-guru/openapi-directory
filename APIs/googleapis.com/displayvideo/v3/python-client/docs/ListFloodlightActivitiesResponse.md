# ListFloodlightActivitiesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**floodlight_activities** | [**List[FloodlightActivity]**](FloodlightActivity.md) | The list of Floodlight activities. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListFloodlightActivities&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_floodlight_activities_response import ListFloodlightActivitiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFloodlightActivitiesResponse from a JSON string
list_floodlight_activities_response_instance = ListFloodlightActivitiesResponse.from_json(json)
# print the JSON string representation of the object
print(ListFloodlightActivitiesResponse.to_json())

# convert the object into a dict
list_floodlight_activities_response_dict = list_floodlight_activities_response_instance.to_dict()
# create an instance of ListFloodlightActivitiesResponse from a dict
list_floodlight_activities_response_from_dict = ListFloodlightActivitiesResponse.from_dict(list_floodlight_activities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


