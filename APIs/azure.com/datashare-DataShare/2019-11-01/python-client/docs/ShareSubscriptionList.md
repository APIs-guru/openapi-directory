# ShareSubscriptionList

List response for get ShareSubscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The Url of next result page. | [optional] 
**value** | [**List[ShareSubscription]**](ShareSubscription.md) | Collection of items of type DataTransferObjects. | 

## Example

```python
from openapi_client.models.share_subscription_list import ShareSubscriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of ShareSubscriptionList from a JSON string
share_subscription_list_instance = ShareSubscriptionList.from_json(json)
# print the JSON string representation of the object
print(ShareSubscriptionList.to_json())

# convert the object into a dict
share_subscription_list_dict = share_subscription_list_instance.to_dict()
# create an instance of ShareSubscriptionList from a dict
share_subscription_list_from_dict = ShareSubscriptionList.from_dict(share_subscription_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


