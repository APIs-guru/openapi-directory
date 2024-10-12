# HttpRouteRouteRule

Specifies how to match traffic and how to route traffic when traffic is matched.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**HttpRouteRouteAction**](HttpRouteRouteAction.md) |  | [optional] 
**matches** | [**List[HttpRouteRouteMatch]**](HttpRouteRouteMatch.md) | A list of matches define conditions used for matching the rule against incoming HTTP requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied. If no matches field is specified, this rule will unconditionally match traffic. If a default rule is desired to be configured, add a rule with no matches specified to the end of the rules list. | [optional] 

## Example

```python
from openapi_client.models.http_route_route_rule import HttpRouteRouteRule

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteRouteRule from a JSON string
http_route_route_rule_instance = HttpRouteRouteRule.from_json(json)
# print the JSON string representation of the object
print(HttpRouteRouteRule.to_json())

# convert the object into a dict
http_route_route_rule_dict = http_route_route_rule_instance.to_dict()
# create an instance of HttpRouteRouteRule from a dict
http_route_route_rule_from_dict = HttpRouteRouteRule.from_dict(http_route_route_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


