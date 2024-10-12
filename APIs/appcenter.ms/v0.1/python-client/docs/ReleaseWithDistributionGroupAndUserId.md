# ReleaseWithDistributionGroupAndUserId


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** | Unique user Id.  Will generate a new user Id if not provided.  | [optional] 
**distribution_group** | **str** | Distribution group Id.  | [optional] 
**release** | **str** | Release Id.  | 

## Example

```python
from openapi_client.models.release_with_distribution_group_and_user_id import ReleaseWithDistributionGroupAndUserId

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseWithDistributionGroupAndUserId from a JSON string
release_with_distribution_group_and_user_id_instance = ReleaseWithDistributionGroupAndUserId.from_json(json)
# print the JSON string representation of the object
print(ReleaseWithDistributionGroupAndUserId.to_json())

# convert the object into a dict
release_with_distribution_group_and_user_id_dict = release_with_distribution_group_and_user_id_instance.to_dict()
# create an instance of ReleaseWithDistributionGroupAndUserId from a dict
release_with_distribution_group_and_user_id_from_dict = ReleaseWithDistributionGroupAndUserId.from_dict(release_with_distribution_group_and_user_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


