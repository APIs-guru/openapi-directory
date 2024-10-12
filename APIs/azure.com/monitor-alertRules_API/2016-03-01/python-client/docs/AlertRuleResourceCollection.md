# AlertRuleResourceCollection

Represents a collection of alert rule resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[AlertRuleResource]**](AlertRuleResource.md) | the values for the alert rule resources. | [optional] 

## Example

```python
from openapi_client.models.alert_rule_resource_collection import AlertRuleResourceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of AlertRuleResourceCollection from a JSON string
alert_rule_resource_collection_instance = AlertRuleResourceCollection.from_json(json)
# print the JSON string representation of the object
print(AlertRuleResourceCollection.to_json())

# convert the object into a dict
alert_rule_resource_collection_dict = alert_rule_resource_collection_instance.to_dict()
# create an instance of AlertRuleResourceCollection from a dict
alert_rule_resource_collection_from_dict = AlertRuleResourceCollection.from_dict(alert_rule_resource_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


