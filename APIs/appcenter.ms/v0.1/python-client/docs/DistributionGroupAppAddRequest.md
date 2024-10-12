# DistributionGroupAppAddRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps** | [**List[DistributionGroupsAddAppsRequestAppsInner]**](DistributionGroupsAddAppsRequestAppsInner.md) | The list of apps to add to distribution group | [optional] 

## Example

```python
from openapi_client.models.distribution_group_app_add_request import DistributionGroupAppAddRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupAppAddRequest from a JSON string
distribution_group_app_add_request_instance = DistributionGroupAppAddRequest.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupAppAddRequest.to_json())

# convert the object into a dict
distribution_group_app_add_request_dict = distribution_group_app_add_request_instance.to_dict()
# create an instance of DistributionGroupAppAddRequest from a dict
distribution_group_app_add_request_from_dict = DistributionGroupAppAddRequest.from_dict(distribution_group_app_add_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


