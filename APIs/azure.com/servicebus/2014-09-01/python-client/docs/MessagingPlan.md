# MessagingPlan

Premium Messaging

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MessagingPlanproperties**](MessagingPlanproperties.md) |  | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.messaging_plan import MessagingPlan

# TODO update the JSON string below
json = "{}"
# create an instance of MessagingPlan from a JSON string
messaging_plan_instance = MessagingPlan.from_json(json)
# print the JSON string representation of the object
print(MessagingPlan.to_json())

# convert the object into a dict
messaging_plan_dict = messaging_plan_instance.to_dict()
# create an instance of MessagingPlan from a dict
messaging_plan_from_dict = MessagingPlan.from_dict(messaging_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


