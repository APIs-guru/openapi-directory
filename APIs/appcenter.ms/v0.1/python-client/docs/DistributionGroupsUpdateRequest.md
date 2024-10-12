# DistributionGroupsUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_public** | **bool** | Whether the distribution group is public | [optional] 
**name** | **str** | The name of the distribution group | [optional] 

## Example

```python
from openapi_client.models.distribution_groups_update_request import DistributionGroupsUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupsUpdateRequest from a JSON string
distribution_groups_update_request_instance = DistributionGroupsUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupsUpdateRequest.to_json())

# convert the object into a dict
distribution_groups_update_request_dict = distribution_groups_update_request_instance.to_dict()
# create an instance of DistributionGroupsUpdateRequest from a dict
distribution_groups_update_request_from_dict = DistributionGroupsUpdateRequest.from_dict(distribution_groups_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


