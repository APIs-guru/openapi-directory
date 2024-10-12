# DistributionGroupWithoutIsLatest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID identifying a unique distribution group. | 
**name** | **str** | A name identifying a unique distribution group. | [optional] 

## Example

```python
from openapi_client.models.distribution_group_without_is_latest import DistributionGroupWithoutIsLatest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupWithoutIsLatest from a JSON string
distribution_group_without_is_latest_instance = DistributionGroupWithoutIsLatest.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupWithoutIsLatest.to_json())

# convert the object into a dict
distribution_group_without_is_latest_dict = distribution_group_without_is_latest_instance.to_dict()
# create an instance of DistributionGroupWithoutIsLatest from a dict
distribution_group_without_is_latest_from_dict = DistributionGroupWithoutIsLatest.from_dict(distribution_group_without_is_latest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


