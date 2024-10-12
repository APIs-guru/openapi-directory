# GoogleAudience

Describes a Google audience resource. Includes Google audience lists.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the Google audience. . | [optional] [readonly] 
**google_audience_id** | **str** | Output only. The unique ID of the Google audience. Assigned by the system. | [optional] [readonly] 
**google_audience_type** | **str** | Output only. The type of Google audience. . | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the google audience. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_audience import GoogleAudience

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAudience from a JSON string
google_audience_instance = GoogleAudience.from_json(json)
# print the JSON string representation of the object
print(GoogleAudience.to_json())

# convert the object into a dict
google_audience_dict = google_audience_instance.to_dict()
# create an instance of GoogleAudience from a dict
google_audience_from_dict = GoogleAudience.from_dict(google_audience_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


