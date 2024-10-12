# DistributionGroupPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_public** | **bool** | Whether the distribution group is public | [optional] 
**name** | **str** | The name of the distribution group | [optional] 

## Example

```python
from openapi_client.models.distribution_group_patch_request import DistributionGroupPatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupPatchRequest from a JSON string
distribution_group_patch_request_instance = DistributionGroupPatchRequest.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupPatchRequest.to_json())

# convert the object into a dict
distribution_group_patch_request_dict = distribution_group_patch_request_instance.to_dict()
# create an instance of DistributionGroupPatchRequest from a dict
distribution_group_patch_request_from_dict = DistributionGroupPatchRequest.from_dict(distribution_group_patch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


