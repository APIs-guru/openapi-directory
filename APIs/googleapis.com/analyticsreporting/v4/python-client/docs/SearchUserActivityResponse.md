# SearchUserActivityResponse

The response from `userActivity:get` call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | This token should be passed to [SearchUserActivityRequest](#SearchUserActivityRequest) to retrieve the next page. | [optional] 
**sample_rate** | **float** | This field represents the [sampling rate](https://support.google.com/analytics/answer/2637192) for the given request and is a number between 0.0 to 1.0. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details. | [optional] 
**sessions** | [**List[UserActivitySession]**](UserActivitySession.md) | Each record represents a session (device details, duration, etc). | [optional] 
**total_rows** | **int** | Total rows returned by this query (across different pages). | [optional] 

## Example

```python
from openapi_client.models.search_user_activity_response import SearchUserActivityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchUserActivityResponse from a JSON string
search_user_activity_response_instance = SearchUserActivityResponse.from_json(json)
# print the JSON string representation of the object
print(SearchUserActivityResponse.to_json())

# convert the object into a dict
search_user_activity_response_dict = search_user_activity_response_instance.to_dict()
# create an instance of SearchUserActivityResponse from a dict
search_user_activity_response_from_dict = SearchUserActivityResponse.from_dict(search_user_activity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


