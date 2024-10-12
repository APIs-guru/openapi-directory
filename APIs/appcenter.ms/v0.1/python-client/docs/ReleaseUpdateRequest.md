# ReleaseUpdateRequest

A request containing information for updating a release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | [**ReleasesGetLatestByDistributionGroup200ResponseBuild**](ReleasesGetLatestByDistributionGroup200ResponseBuild.md) |  | [optional] 
**destination_id** | **str** | OBSOLETE. Will be removed in future releases - use destinations instead. Id of a destination. The release will be associated with this destination. If the destination doesn&#39;t exist a 400 is returned. If both destination name and id are passed, the id is taking precedence. | [optional] 
**destination_name** | **str** | OBSOLETE. Will be removed in future releases - use destinations instead. Name of a destination. The release will be associated with this destination. If the destination doesn&#39;t exist a 400 is returned. If both distribution group name and id are passed, the id is taking precedence. | [optional] 
**destination_type** | **str** | Not used anymore. | [optional] 
**destinations** | [**List[ReleasesUpdateRequestDestinationsInner]**](ReleasesUpdateRequestDestinationsInner.md) | Distribute this release under the following list of destinations (store groups or distribution groups). | [optional] 
**distribution_group_id** | **str** | OBSOLETE. Will be removed in future releases - use destinations instead. Id of a distribution group. The release will be associated with this distribution group. If the distribution group doesn&#39;t exist a 400 is returned. If both distribution group name and id are passed, the id is taking precedence. | [optional] 
**distribution_group_name** | **str** | OBSOLETE. Will be removed in future releases - use destinations instead. Name of a distribution group. The release will be associated with this distribution group. If the distribution group doesn&#39;t exist a 400 is returned. If both distribution group name and id are passed, the id is taking precedence. | [optional] 
**mandatory_update** | **bool** | A boolean which determines whether this version should be a mandatory update or not. | [optional] 
**metadata** | [**ReleasesUpdateRequestMetadata**](ReleasesUpdateRequestMetadata.md) |  | [optional] 
**notify_testers** | **bool** | A boolean which determines whether to notify testers of a new release, default to true. | [optional] [default to True]
**release_notes** | **str** | Release notes for this release. | [optional] 

## Example

```python
from openapi_client.models.release_update_request import ReleaseUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseUpdateRequest from a JSON string
release_update_request_instance = ReleaseUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(ReleaseUpdateRequest.to_json())

# convert the object into a dict
release_update_request_dict = release_update_request_instance.to_dict()
# create an instance of ReleaseUpdateRequest from a dict
release_update_request_from_dict = ReleaseUpdateRequest.from_dict(release_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


