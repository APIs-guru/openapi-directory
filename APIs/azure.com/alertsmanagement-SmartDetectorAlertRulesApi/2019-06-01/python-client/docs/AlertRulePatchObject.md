# AlertRulePatchObject

The alert rule patch information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource ID. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**properties** | [**AlertRulePatchProperties**](AlertRulePatchProperties.md) |  | [optional] 
**tags** | **object** | The resource tags. | [optional] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.alert_rule_patch_object import AlertRulePatchObject

# TODO update the JSON string below
json = "{}"
# create an instance of AlertRulePatchObject from a JSON string
alert_rule_patch_object_instance = AlertRulePatchObject.from_json(json)
# print the JSON string representation of the object
print(AlertRulePatchObject.to_json())

# convert the object into a dict
alert_rule_patch_object_dict = alert_rule_patch_object_instance.to_dict()
# create an instance of AlertRulePatchObject from a dict
alert_rule_patch_object_from_dict = AlertRulePatchObject.from_dict(alert_rule_patch_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


