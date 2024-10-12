# UserBadge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**awarded_at** | **datetime** |  | [optional] 
**badge_expiry** | [**UserBadgeBadgeExpiry**](UserBadgeBadgeExpiry.md) |  | [optional] 
**badge_url** | **str** |  | [optional] 
**criterias** | [**Criteria**](Criteria.md) |  | [optional] 
**description** | **str** |  | [optional] 
**offering_id** | **str** |  | [optional] 
**open_badge** | [**OpenBadgeClass**](OpenBadgeClass.md) |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_badge import UserBadge

# TODO update the JSON string below
json = "{}"
# create an instance of UserBadge from a JSON string
user_badge_instance = UserBadge.from_json(json)
# print the JSON string representation of the object
print(UserBadge.to_json())

# convert the object into a dict
user_badge_dict = user_badge_instance.to_dict()
# create an instance of UserBadge from a dict
user_badge_from_dict = UserBadge.from_dict(user_badge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


