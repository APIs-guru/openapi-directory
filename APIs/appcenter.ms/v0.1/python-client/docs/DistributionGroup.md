# DistributionGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID identifying a unique distribution group. | 
**name** | **str** | A name identifying a unique distribution group. | [optional] 
**is_latest** | **bool** | Is the containing release the latest one in this distribution group. | [optional] 

## Example

```python
from openapi_client.models.distribution_group import DistributionGroup

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroup from a JSON string
distribution_group_instance = DistributionGroup.from_json(json)
# print the JSON string representation of the object
print(DistributionGroup.to_json())

# convert the object into a dict
distribution_group_dict = distribution_group_instance.to_dict()
# create an instance of DistributionGroup from a dict
distribution_group_from_dict = DistributionGroup.from_dict(distribution_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


