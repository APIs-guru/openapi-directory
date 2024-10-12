# ListActivitiesResponse

The response from the list request. Contains a list of activities and a token to retrieve the next page of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activities** | [**List[Activity]**](Activity.md) | List of activities. | [optional] 
**next_page_token** | **str** | Token for the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_activities_response import ListActivitiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListActivitiesResponse from a JSON string
list_activities_response_instance = ListActivitiesResponse.from_json(json)
# print the JSON string representation of the object
print(ListActivitiesResponse.to_json())

# convert the object into a dict
list_activities_response_dict = list_activities_response_instance.to_dict()
# create an instance of ListActivitiesResponse from a dict
list_activities_response_from_dict = ListActivitiesResponse.from_dict(list_activities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


