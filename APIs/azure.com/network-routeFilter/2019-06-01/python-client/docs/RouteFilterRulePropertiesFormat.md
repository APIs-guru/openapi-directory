# RouteFilterRulePropertiesFormat

Route Filter Rule Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Access to be allowed or denied. | 
**communities** | **List[str]** | The collection for bgp community values to filter on. e.g. [&#39;12076:5010&#39;,&#39;12076:5020&#39;]. | 
**provisioning_state** | **str** | The provisioning state of the resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, &#39;Succeeded&#39; and &#39;Failed&#39;. | [optional] [readonly] 
**route_filter_rule_type** | **str** | The rule type of the rule. | 

## Example

```python
from openapi_client.models.route_filter_rule_properties_format import RouteFilterRulePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of RouteFilterRulePropertiesFormat from a JSON string
route_filter_rule_properties_format_instance = RouteFilterRulePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(RouteFilterRulePropertiesFormat.to_json())

# convert the object into a dict
route_filter_rule_properties_format_dict = route_filter_rule_properties_format_instance.to_dict()
# create an instance of RouteFilterRulePropertiesFormat from a dict
route_filter_rule_properties_format_from_dict = RouteFilterRulePropertiesFormat.from_dict(route_filter_rule_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


