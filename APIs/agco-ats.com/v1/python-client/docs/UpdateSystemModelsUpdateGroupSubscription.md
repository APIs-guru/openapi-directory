# UpdateSystemModelsUpdateGroupSubscription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The ClientID. | 
**include** | **bool** | True to receive content of type indicated by PackageTypeID. | 
**package_type_id** | **str** | The PackageType to set subscription status for | 
**update_group_id** | **str** | The Update Group this subscription is relevant for. | 
**update_group_subscription_id** | **int** | The Update Group Subscription ID.  This ID will be automatically assigned when creating an Update Group Subscription. | [optional] 

## Example

```python
from openapi_client.models.update_system_models_update_group_subscription import UpdateSystemModelsUpdateGroupSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsUpdateGroupSubscription from a JSON string
update_system_models_update_group_subscription_instance = UpdateSystemModelsUpdateGroupSubscription.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsUpdateGroupSubscription.to_json())

# convert the object into a dict
update_system_models_update_group_subscription_dict = update_system_models_update_group_subscription_instance.to_dict()
# create an instance of UpdateSystemModelsUpdateGroupSubscription from a dict
update_system_models_update_group_subscription_from_dict = UpdateSystemModelsUpdateGroupSubscription.from_dict(update_system_models_update_group_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


