# HTTPNotificationRuleBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.http_notification_rule_base import HTTPNotificationRuleBase

# TODO update the JSON string below
json = "{}"
# create an instance of HTTPNotificationRuleBase from a JSON string
http_notification_rule_base_instance = HTTPNotificationRuleBase.from_json(json)
# print the JSON string representation of the object
print(HTTPNotificationRuleBase.to_json())

# convert the object into a dict
http_notification_rule_base_dict = http_notification_rule_base_instance.to_dict()
# create an instance of HTTPNotificationRuleBase from a dict
http_notification_rule_base_from_dict = HTTPNotificationRuleBase.from_dict(http_notification_rule_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


