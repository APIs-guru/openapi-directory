# DistributionGroupAADGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_groups** | [**List[DistributionGroupAADGroupRequestAadGroupsInner]**](DistributionGroupAADGroupRequestAadGroupsInner.md) | The list of aad group ids and names to add | [optional] 

## Example

```python
from openapi_client.models.distribution_group_aad_group_request import DistributionGroupAADGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupAADGroupRequest from a JSON string
distribution_group_aad_group_request_instance = DistributionGroupAADGroupRequest.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupAADGroupRequest.to_json())

# convert the object into a dict
distribution_group_aad_group_request_dict = distribution_group_aad_group_request_instance.to_dict()
# create an instance of DistributionGroupAADGroupRequest from a dict
distribution_group_aad_group_request_from_dict = DistributionGroupAADGroupRequest.from_dict(distribution_group_aad_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


