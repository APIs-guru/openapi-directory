# DistributionGroupsAddAppsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps** | [**List[DistributionGroupsAddAppsRequestAppsInner]**](DistributionGroupsAddAppsRequestAppsInner.md) | The list of apps to add to distribution group | [optional] 

## Example

```python
from openapi_client.models.distribution_groups_add_apps_request import DistributionGroupsAddAppsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupsAddAppsRequest from a JSON string
distribution_groups_add_apps_request_instance = DistributionGroupsAddAppsRequest.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupsAddAppsRequest.to_json())

# convert the object into a dict
distribution_groups_add_apps_request_dict = distribution_groups_add_apps_request_instance.to_dict()
# create an instance of DistributionGroupsAddAppsRequest from a dict
distribution_groups_add_apps_request_from_dict = DistributionGroupsAddAppsRequest.from_dict(distribution_groups_add_apps_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


