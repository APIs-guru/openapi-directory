# ReleaseDetailsUpdateRequest

A request containing information for updating details of a release

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | [**ReleasesGetLatestByDistributionGroup200ResponseBuild**](ReleasesGetLatestByDistributionGroup200ResponseBuild.md) |  | [optional] 
**enabled** | **bool** | Toggle this release to be enable distribute/download or not. | [optional] 
**release_notes** | **str** | Release notes for this release. | [optional] 

## Example

```python
from openapi_client.models.release_details_update_request import ReleaseDetailsUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseDetailsUpdateRequest from a JSON string
release_details_update_request_instance = ReleaseDetailsUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(ReleaseDetailsUpdateRequest.to_json())

# convert the object into a dict
release_details_update_request_dict = release_details_update_request_instance.to_dict()
# create an instance of ReleaseDetailsUpdateRequest from a dict
release_details_update_request_from_dict = ReleaseDetailsUpdateRequest.from_dict(release_details_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


