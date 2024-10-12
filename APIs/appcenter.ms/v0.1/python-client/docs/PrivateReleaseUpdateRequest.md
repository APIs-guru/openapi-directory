# PrivateReleaseUpdateRequest

A request containing information for updating a release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publishing_status** | **str** | The store publishing status. | [optional] 

## Example

```python
from openapi_client.models.private_release_update_request import PrivateReleaseUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateReleaseUpdateRequest from a JSON string
private_release_update_request_instance = PrivateReleaseUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(PrivateReleaseUpdateRequest.to_json())

# convert the object into a dict
private_release_update_request_dict = private_release_update_request_instance.to_dict()
# create an instance of PrivateReleaseUpdateRequest from a dict
private_release_update_request_from_dict = PrivateReleaseUpdateRequest.from_dict(private_release_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


