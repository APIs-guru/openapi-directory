# ReleaseTesterDestinationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Tester&#39;s email address | 
**mandatory_update** | **bool** | Flag to mark the release for the provided destinations as mandatory | [optional] 
**notify_testers** | **bool** | Flag to enable or disable notifications to testers | [optional] [default to True]

## Example

```python
from openapi_client.models.release_tester_destination_request import ReleaseTesterDestinationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseTesterDestinationRequest from a JSON string
release_tester_destination_request_instance = ReleaseTesterDestinationRequest.from_json(json)
# print the JSON string representation of the object
print(ReleaseTesterDestinationRequest.to_json())

# convert the object into a dict
release_tester_destination_request_dict = release_tester_destination_request_instance.to_dict()
# create an instance of ReleaseTesterDestinationRequest from a dict
release_tester_destination_request_from_dict = ReleaseTesterDestinationRequest.from_dict(release_tester_destination_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


