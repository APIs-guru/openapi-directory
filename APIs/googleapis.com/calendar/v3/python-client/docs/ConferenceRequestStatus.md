# ConferenceRequestStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_code** | **str** | The current status of the conference create request. Read-only. The possible values are:   - \&quot;pending\&quot;: the conference create request is still being processed. - \&quot;success\&quot;: the conference create request succeeded, the entry points are populated. - \&quot;failure\&quot;: the conference create request failed, there are no entry points. | [optional] 

## Example

```python
from openapi_client.models.conference_request_status import ConferenceRequestStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ConferenceRequestStatus from a JSON string
conference_request_status_instance = ConferenceRequestStatus.from_json(json)
# print the JSON string representation of the object
print(ConferenceRequestStatus.to_json())

# convert the object into a dict
conference_request_status_dict = conference_request_status_instance.to_dict()
# create an instance of ConferenceRequestStatus from a dict
conference_request_status_from_dict = ConferenceRequestStatus.from_dict(conference_request_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


