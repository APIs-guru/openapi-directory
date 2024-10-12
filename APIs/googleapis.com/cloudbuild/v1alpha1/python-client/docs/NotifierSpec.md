# NotifierSpec

NotifierSpec is the configuration container for notifications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notification** | [**Notification**](Notification.md) |  | [optional] 
**secrets** | [**List[NotifierSecret]**](NotifierSecret.md) | Configurations for secret resources used by this particular notifier. | [optional] 

## Example

```python
from openapi_client.models.notifier_spec import NotifierSpec

# TODO update the JSON string below
json = "{}"
# create an instance of NotifierSpec from a JSON string
notifier_spec_instance = NotifierSpec.from_json(json)
# print the JSON string representation of the object
print(NotifierSpec.to_json())

# convert the object into a dict
notifier_spec_dict = notifier_spec_instance.to_dict()
# create an instance of NotifierSpec from a dict
notifier_spec_from_dict = NotifierSpec.from_dict(notifier_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


