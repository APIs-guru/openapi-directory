# DistributionGroupsList200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the distribution group | [optional] 
**id** | **str** | The unique ID of the distribution group | 
**is_public** | **bool** | Whether the distribution group is public | 
**name** | **str** | The name of the distribution group used in URLs | 
**origin** | **str** | The creation origin of this distribution group | 

## Example

```python
from openapi_client.models.distribution_groups_list200_response_inner import DistributionGroupsList200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupsList200ResponseInner from a JSON string
distribution_groups_list200_response_inner_instance = DistributionGroupsList200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupsList200ResponseInner.to_json())

# convert the object into a dict
distribution_groups_list200_response_inner_dict = distribution_groups_list200_response_inner_instance.to_dict()
# create an instance of DistributionGroupsList200ResponseInner from a dict
distribution_groups_list200_response_inner_from_dict = DistributionGroupsList200ResponseInner.from_dict(distribution_groups_list200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


