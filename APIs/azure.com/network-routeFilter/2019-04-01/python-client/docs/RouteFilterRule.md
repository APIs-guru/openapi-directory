# RouteFilterRule

Route Filter Rule Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**RouteFilterRulePropertiesFormat**](RouteFilterRulePropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.route_filter_rule import RouteFilterRule

# TODO update the JSON string below
json = "{}"
# create an instance of RouteFilterRule from a JSON string
route_filter_rule_instance = RouteFilterRule.from_json(json)
# print the JSON string representation of the object
print(RouteFilterRule.to_json())

# convert the object into a dict
route_filter_rule_dict = route_filter_rule_instance.to_dict()
# create an instance of RouteFilterRule from a dict
route_filter_rule_from_dict = RouteFilterRule.from_dict(route_filter_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


