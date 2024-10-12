# MessagingPlanproperties

Premium Messaging Region

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revision** | **int** | revision number | [optional] 
**selected_event_hub_unit** | **int** | Selected event hub unit | [optional] 
**sku** | **int** | Sku type | [optional] 
**updated_at** | **datetime** | The exact time the messaging plan was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.messaging_planproperties import MessagingPlanproperties

# TODO update the JSON string below
json = "{}"
# create an instance of MessagingPlanproperties from a JSON string
messaging_planproperties_instance = MessagingPlanproperties.from_json(json)
# print the JSON string representation of the object
print(MessagingPlanproperties.to_json())

# convert the object into a dict
messaging_planproperties_dict = messaging_planproperties_instance.to_dict()
# create an instance of MessagingPlanproperties from a dict
messaging_planproperties_from_dict = MessagingPlanproperties.from_dict(messaging_planproperties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


