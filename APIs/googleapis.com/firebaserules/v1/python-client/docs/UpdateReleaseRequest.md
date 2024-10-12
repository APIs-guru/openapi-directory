# UpdateReleaseRequest

The request for FirebaseRulesService.UpdateRelease.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release** | [**Release**](Release.md) |  | [optional] 
**update_mask** | **str** | Specifies which fields to update. | [optional] 

## Example

```python
from openapi_client.models.update_release_request import UpdateReleaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateReleaseRequest from a JSON string
update_release_request_instance = UpdateReleaseRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateReleaseRequest.to_json())

# convert the object into a dict
update_release_request_dict = update_release_request_instance.to_dict()
# create an instance of UpdateReleaseRequest from a dict
update_release_request_from_dict = UpdateReleaseRequest.from_dict(update_release_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


