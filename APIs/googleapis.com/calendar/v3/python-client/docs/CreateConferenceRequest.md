# CreateConferenceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conference_solution_key** | [**ConferenceSolutionKey**](ConferenceSolutionKey.md) |  | [optional] 
**request_id** | **str** | The client-generated unique ID for this request. Clients should regenerate this ID for every new request. If an ID provided is the same as for the previous request, the request is ignored. | [optional] 
**status** | [**ConferenceRequestStatus**](ConferenceRequestStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_conference_request import CreateConferenceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateConferenceRequest from a JSON string
create_conference_request_instance = CreateConferenceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateConferenceRequest.to_json())

# convert the object into a dict
create_conference_request_dict = create_conference_request_instance.to_dict()
# create an instance of CreateConferenceRequest from a dict
create_conference_request_from_dict = CreateConferenceRequest.from_dict(create_conference_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


