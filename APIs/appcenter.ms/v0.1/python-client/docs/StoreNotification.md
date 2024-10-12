# StoreNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**valid_until** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.store_notification import StoreNotification

# TODO update the JSON string below
json = "{}"
# create an instance of StoreNotification from a JSON string
store_notification_instance = StoreNotification.from_json(json)
# print the JSON string representation of the object
print(StoreNotification.to_json())

# convert the object into a dict
store_notification_dict = store_notification_instance.to_dict()
# create an instance of StoreNotification from a dict
store_notification_from_dict = StoreNotification.from_dict(store_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


