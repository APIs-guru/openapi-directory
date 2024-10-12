# ShareSubscriptionSynchronizationList

A consumer side list of share subscription synchronizations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The Url of next result page. | [optional] 
**value** | [**List[ShareSubscriptionSynchronization]**](ShareSubscriptionSynchronization.md) | Collection of items of type DataTransferObjects. | 

## Example

```python
from openapi_client.models.share_subscription_synchronization_list import ShareSubscriptionSynchronizationList

# TODO update the JSON string below
json = "{}"
# create an instance of ShareSubscriptionSynchronizationList from a JSON string
share_subscription_synchronization_list_instance = ShareSubscriptionSynchronizationList.from_json(json)
# print the JSON string representation of the object
print(ShareSubscriptionSynchronizationList.to_json())

# convert the object into a dict
share_subscription_synchronization_list_dict = share_subscription_synchronization_list_instance.to_dict()
# create an instance of ShareSubscriptionSynchronizationList from a dict
share_subscription_synchronization_list_from_dict = ShareSubscriptionSynchronizationList.from_dict(share_subscription_synchronization_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


