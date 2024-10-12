# ManifestsRequests

An array of manifest requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifest_requests** | [**List[ManifestRequest]**](ManifestRequest.md) | Resulting manifest requests with statuses | [optional] 

## Example

```python
from openapi_client.models.manifests_requests import ManifestsRequests

# TODO update the JSON string below
json = "{}"
# create an instance of ManifestsRequests from a JSON string
manifests_requests_instance = ManifestsRequests.from_json(json)
# print the JSON string representation of the object
print(ManifestsRequests.to_json())

# convert the object into a dict
manifests_requests_dict = manifests_requests_instance.to_dict()
# create an instance of ManifestsRequests from a dict
manifests_requests_from_dict = ManifestsRequests.from_dict(manifests_requests_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


