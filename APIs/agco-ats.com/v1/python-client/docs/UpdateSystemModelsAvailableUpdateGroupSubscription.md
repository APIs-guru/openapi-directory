# UpdateSystemModelsAvailableUpdateGroupSubscription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_subscriptions** | [**List[UpdateSystemModelsAvailableSubscription]**](UpdateSystemModelsAvailableSubscription.md) | The available subscriptions for this update group. | [optional] 
**update_group** | [**UpdateSystemModelsUpdateGroup**](UpdateSystemModelsUpdateGroup.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_system_models_available_update_group_subscription import UpdateSystemModelsAvailableUpdateGroupSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsAvailableUpdateGroupSubscription from a JSON string
update_system_models_available_update_group_subscription_instance = UpdateSystemModelsAvailableUpdateGroupSubscription.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsAvailableUpdateGroupSubscription.to_json())

# convert the object into a dict
update_system_models_available_update_group_subscription_dict = update_system_models_available_update_group_subscription_instance.to_dict()
# create an instance of UpdateSystemModelsAvailableUpdateGroupSubscription from a dict
update_system_models_available_update_group_subscription_from_dict = UpdateSystemModelsAvailableUpdateGroupSubscription.from_dict(update_system_models_available_update_group_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


