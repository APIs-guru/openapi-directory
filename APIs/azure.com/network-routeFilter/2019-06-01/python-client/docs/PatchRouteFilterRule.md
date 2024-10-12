# PatchRouteFilterRule

Route Filter Rule Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] [readonly] 
**properties** | [**RouteFilterRulePropertiesFormat**](RouteFilterRulePropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.patch_route_filter_rule import PatchRouteFilterRule

# TODO update the JSON string below
json = "{}"
# create an instance of PatchRouteFilterRule from a JSON string
patch_route_filter_rule_instance = PatchRouteFilterRule.from_json(json)
# print the JSON string representation of the object
print(PatchRouteFilterRule.to_json())

# convert the object into a dict
patch_route_filter_rule_dict = patch_route_filter_rule_instance.to_dict()
# create an instance of PatchRouteFilterRule from a dict
patch_route_filter_rule_from_dict = PatchRouteFilterRule.from_dict(patch_route_filter_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


