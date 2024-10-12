# ReleasesAddTestersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Tester&#39;s email address | 
**mandatory_update** | **bool** | Flag to mark the release for the provided destinations as mandatory | [optional] 
**notify_testers** | **bool** | Flag to enable or disable notifications to testers | [optional] [default to True]

## Example

```python
from openapi_client.models.releases_add_testers_request import ReleasesAddTestersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesAddTestersRequest from a JSON string
releases_add_testers_request_instance = ReleasesAddTestersRequest.from_json(json)
# print the JSON string representation of the object
print(ReleasesAddTestersRequest.to_json())

# convert the object into a dict
releases_add_testers_request_dict = releases_add_testers_request_instance.to_dict()
# create an instance of ReleasesAddTestersRequest from a dict
releases_add_testers_request_from_dict = ReleasesAddTestersRequest.from_dict(releases_add_testers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


