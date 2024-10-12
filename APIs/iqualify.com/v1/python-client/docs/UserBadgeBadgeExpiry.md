# UserBadgeBadgeExpiry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date** | **datetime** |  | [optional] 
**expires** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.user_badge_badge_expiry import UserBadgeBadgeExpiry

# TODO update the JSON string below
json = "{}"
# create an instance of UserBadgeBadgeExpiry from a JSON string
user_badge_badge_expiry_instance = UserBadgeBadgeExpiry.from_json(json)
# print the JSON string representation of the object
print(UserBadgeBadgeExpiry.to_json())

# convert the object into a dict
user_badge_badge_expiry_dict = user_badge_badge_expiry_instance.to_dict()
# create an instance of UserBadgeBadgeExpiry from a dict
user_badge_badge_expiry_from_dict = UserBadgeBadgeExpiry.from_dict(user_badge_badge_expiry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


