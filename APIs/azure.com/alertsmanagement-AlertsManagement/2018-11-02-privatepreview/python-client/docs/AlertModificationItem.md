# AlertModificationItem

Alert modification item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** | Modification comments | [optional] 
**description** | **str** | Description of the modification | [optional] 
**modification_event** | **str** | Reason for the modification | [optional] 
**modified_at** | **str** | Modified date and time | [optional] 
**modified_by** | **str** | Modified user details (Principal client name) | [optional] 
**new_value** | **str** | New value | [optional] 
**old_value** | **str** | Old value | [optional] 

## Example

```python
from openapi_client.models.alert_modification_item import AlertModificationItem

# TODO update the JSON string below
json = "{}"
# create an instance of AlertModificationItem from a JSON string
alert_modification_item_instance = AlertModificationItem.from_json(json)
# print the JSON string representation of the object
print(AlertModificationItem.to_json())

# convert the object into a dict
alert_modification_item_dict = alert_modification_item_instance.to_dict()
# create an instance of AlertModificationItem from a dict
alert_modification_item_from_dict = AlertModificationItem.from_dict(alert_modification_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


