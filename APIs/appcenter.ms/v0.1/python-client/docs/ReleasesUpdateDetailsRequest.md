# ReleasesUpdateDetailsRequest

A request containing information for updating details of a release

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | [**ReleasesGetLatestByDistributionGroup200ResponseBuild**](ReleasesGetLatestByDistributionGroup200ResponseBuild.md) |  | [optional] 
**enabled** | **bool** | Toggle this release to be enable distribute/download or not. | [optional] 
**release_notes** | **str** | Release notes for this release. | [optional] 

## Example

```python
from openapi_client.models.releases_update_details_request import ReleasesUpdateDetailsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesUpdateDetailsRequest from a JSON string
releases_update_details_request_instance = ReleasesUpdateDetailsRequest.from_json(json)
# print the JSON string representation of the object
print(ReleasesUpdateDetailsRequest.to_json())

# convert the object into a dict
releases_update_details_request_dict = releases_update_details_request_instance.to_dict()
# create an instance of ReleasesUpdateDetailsRequest from a dict
releases_update_details_request_from_dict = ReleasesUpdateDetailsRequest.from_dict(releases_update_details_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


