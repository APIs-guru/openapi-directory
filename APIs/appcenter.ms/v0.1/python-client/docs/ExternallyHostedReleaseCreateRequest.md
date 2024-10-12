# ExternallyHostedReleaseCreateRequest

A request containing information for creating an externally hosted release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_number** | **str** | The build number of the uploaded binary | [optional] 
**build_version** | **str** | The build version of the uploaded binary | 
**external_download_url** | **str** | The external URL to the release&#39;s binary. | 

## Example

```python
from openapi_client.models.externally_hosted_release_create_request import ExternallyHostedReleaseCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExternallyHostedReleaseCreateRequest from a JSON string
externally_hosted_release_create_request_instance = ExternallyHostedReleaseCreateRequest.from_json(json)
# print the JSON string representation of the object
print(ExternallyHostedReleaseCreateRequest.to_json())

# convert the object into a dict
externally_hosted_release_create_request_dict = externally_hosted_release_create_request_instance.to_dict()
# create an instance of ExternallyHostedReleaseCreateRequest from a dict
externally_hosted_release_create_request_from_dict = ExternallyHostedReleaseCreateRequest.from_dict(externally_hosted_release_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


