# Activities

JSON template for a collection of activities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**items** | [**List[Activity]**](Activity.md) | Each activity record in the response. | [optional] 
**kind** | **str** | The type of API resource. For an activity report, the value is &#x60;reports#activities&#x60;. | [optional] [default to 'admin#reports#activities']
**next_page_token** | **str** | Token for retrieving the follow-on next page of the report. The &#x60;nextPageToken&#x60; value is used in the request&#39;s &#x60;pageToken&#x60; query string. | [optional] 

## Example

```python
from openapi_client.models.activities import Activities

# TODO update the JSON string below
json = "{}"
# create an instance of Activities from a JSON string
activities_instance = Activities.from_json(json)
# print the JSON string representation of the object
print(Activities.to_json())

# convert the object into a dict
activities_dict = activities_instance.to_dict()
# create an instance of Activities from a dict
activities_from_dict = Activities.from_dict(activities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


