# AlertModificationProperties

Properties of the alert modification item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_id** | **str** | Unique Id of the alert for which the history is being retrieved | [optional] [readonly] 
**modifications** | [**List[AlertModificationItem]**](AlertModificationItem.md) | Modification details | [optional] 

## Example

```python
from openapi_client.models.alert_modification_properties import AlertModificationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AlertModificationProperties from a JSON string
alert_modification_properties_instance = AlertModificationProperties.from_json(json)
# print the JSON string representation of the object
print(AlertModificationProperties.to_json())

# convert the object into a dict
alert_modification_properties_dict = alert_modification_properties_instance.to_dict()
# create an instance of AlertModificationProperties from a dict
alert_modification_properties_from_dict = AlertModificationProperties.from_dict(alert_modification_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


