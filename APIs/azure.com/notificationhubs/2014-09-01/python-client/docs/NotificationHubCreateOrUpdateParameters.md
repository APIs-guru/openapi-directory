# NotificationHubCreateOrUpdateParameters

Parameters supplied to the CreateOrUpdate NotificationHub operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Gets or sets NotificationHub data center location. | 
**properties** | [**NotificationHubProperties**](NotificationHubProperties.md) |  | 
**tags** | **Dict[str, str]** | Gets or sets NotificationHub tags. | [optional] 

## Example

```python
from openapi_client.models.notification_hub_create_or_update_parameters import NotificationHubCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationHubCreateOrUpdateParameters from a JSON string
notification_hub_create_or_update_parameters_instance = NotificationHubCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(NotificationHubCreateOrUpdateParameters.to_json())

# convert the object into a dict
notification_hub_create_or_update_parameters_dict = notification_hub_create_or_update_parameters_instance.to_dict()
# create an instance of NotificationHubCreateOrUpdateParameters from a dict
notification_hub_create_or_update_parameters_from_dict = NotificationHubCreateOrUpdateParameters.from_dict(notification_hub_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


