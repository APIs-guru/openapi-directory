# DistributionGroupAADGroupBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_group_id** | **str** | The id of the aad group | [optional] 
**display_name** | **str** | The display name of the aad group | [optional] 

## Example

```python
from openapi_client.models.distribution_group_aad_group_base import DistributionGroupAADGroupBase

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupAADGroupBase from a JSON string
distribution_group_aad_group_base_instance = DistributionGroupAADGroupBase.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupAADGroupBase.to_json())

# convert the object into a dict
distribution_group_aad_group_base_dict = distribution_group_aad_group_base_instance.to_dict()
# create an instance of DistributionGroupAADGroupBase from a dict
distribution_group_aad_group_base_from_dict = DistributionGroupAADGroupBase.from_dict(distribution_group_aad_group_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


