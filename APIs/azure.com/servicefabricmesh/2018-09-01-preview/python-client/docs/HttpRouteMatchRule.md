# HttpRouteMatchRule

Describes a rule for http route matching.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | [**List[HttpRouteMatchHeader]**](HttpRouteMatchHeader.md) | headers and their values to match in request. | [optional] 
**path** | [**HttpRouteMatchPath**](HttpRouteMatchPath.md) |  | 

## Example

```python
from openapi_client.models.http_route_match_rule import HttpRouteMatchRule

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteMatchRule from a JSON string
http_route_match_rule_instance = HttpRouteMatchRule.from_json(json)
# print the JSON string representation of the object
print(HttpRouteMatchRule.to_json())

# convert the object into a dict
http_route_match_rule_dict = http_route_match_rule_instance.to_dict()
# create an instance of HttpRouteMatchRule from a dict
http_route_match_rule_from_dict = HttpRouteMatchRule.from_dict(http_route_match_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


