# DistributionGroupAppsDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps** | [**List[DistributionGroupsBulkDeleteAppsRequestAppsInner]**](DistributionGroupsBulkDeleteAppsRequestAppsInner.md) | The list of apps to delete from the distribution group | [optional] 

## Example

```python
from openapi_client.models.distribution_group_apps_delete_request import DistributionGroupAppsDeleteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupAppsDeleteRequest from a JSON string
distribution_group_apps_delete_request_instance = DistributionGroupAppsDeleteRequest.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupAppsDeleteRequest.to_json())

# convert the object into a dict
distribution_group_apps_delete_request_dict = distribution_group_apps_delete_request_instance.to_dict()
# create an instance of DistributionGroupAppsDeleteRequest from a dict
distribution_group_apps_delete_request_from_dict = DistributionGroupAppsDeleteRequest.from_dict(distribution_group_apps_delete_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


