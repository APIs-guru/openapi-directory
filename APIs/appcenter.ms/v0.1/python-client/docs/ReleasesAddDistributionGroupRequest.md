# ReleasesAddDistributionGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique id of the release destination | 
**mandatory_update** | **bool** | Flag to mark the release for the provided destinations as mandatory | [optional] 
**notify_testers** | **bool** | Flag to enable or disable notifications to testers | [optional] [default to True]

## Example

```python
from openapi_client.models.releases_add_distribution_group_request import ReleasesAddDistributionGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesAddDistributionGroupRequest from a JSON string
releases_add_distribution_group_request_instance = ReleasesAddDistributionGroupRequest.from_json(json)
# print the JSON string representation of the object
print(ReleasesAddDistributionGroupRequest.to_json())

# convert the object into a dict
releases_add_distribution_group_request_dict = releases_add_distribution_group_request_instance.to_dict()
# create an instance of ReleasesAddDistributionGroupRequest from a dict
releases_add_distribution_group_request_from_dict = ReleasesAddDistributionGroupRequest.from_dict(releases_add_distribution_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


