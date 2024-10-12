# UpdateSystemModelsAvailableSubscription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_type** | [**UpdateSystemModelsPackageType**](UpdateSystemModelsPackageType.md) |  | [optional] 
**subscription_type** | **str** | The type of subscription supported. | [optional] 

## Example

```python
from openapi_client.models.update_system_models_available_subscription import UpdateSystemModelsAvailableSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsAvailableSubscription from a JSON string
update_system_models_available_subscription_instance = UpdateSystemModelsAvailableSubscription.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsAvailableSubscription.to_json())

# convert the object into a dict
update_system_models_available_subscription_dict = update_system_models_available_subscription_instance.to_dict()
# create an instance of UpdateSystemModelsAvailableSubscription from a dict
update_system_models_available_subscription_from_dict = UpdateSystemModelsAvailableSubscription.from_dict(update_system_models_available_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


