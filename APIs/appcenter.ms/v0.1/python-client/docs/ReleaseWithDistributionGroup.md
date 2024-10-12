# ReleaseWithDistributionGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distribution_group** | **str** | Distribution group Id.  | [optional] 
**release** | **str** | Release Id.  | 

## Example

```python
from openapi_client.models.release_with_distribution_group import ReleaseWithDistributionGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseWithDistributionGroup from a JSON string
release_with_distribution_group_instance = ReleaseWithDistributionGroup.from_json(json)
# print the JSON string representation of the object
print(ReleaseWithDistributionGroup.to_json())

# convert the object into a dict
release_with_distribution_group_dict = release_with_distribution_group_instance.to_dict()
# create an instance of ReleaseWithDistributionGroup from a dict
release_with_distribution_group_from_dict = ReleaseWithDistributionGroup.from_dict(release_with_distribution_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


