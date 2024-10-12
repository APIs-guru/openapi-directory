# CategorySubscriptionInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**CategorySubscriptionStatus**](CategorySubscriptionStatus.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.category_subscription_info import CategorySubscriptionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CategorySubscriptionInfo from a JSON string
category_subscription_info_instance = CategorySubscriptionInfo.from_json(json)
# print the JSON string representation of the object
print(CategorySubscriptionInfo.to_json())

# convert the object into a dict
category_subscription_info_dict = category_subscription_info_instance.to_dict()
# create an instance of CategorySubscriptionInfo from a dict
category_subscription_info_from_dict = CategorySubscriptionInfo.from_dict(category_subscription_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


