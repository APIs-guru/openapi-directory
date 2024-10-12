# ExpressRouteLinkListResult

Response for ListExpressRouteLinks API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[ExpressRouteLink]**](ExpressRouteLink.md) | The list of ExpressRouteLink sub-resources. | [optional] 

## Example

```python
from openapi_client.models.express_route_link_list_result import ExpressRouteLinkListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteLinkListResult from a JSON string
express_route_link_list_result_instance = ExpressRouteLinkListResult.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteLinkListResult.to_json())

# convert the object into a dict
express_route_link_list_result_dict = express_route_link_list_result_instance.to_dict()
# create an instance of ExpressRouteLinkListResult from a dict
express_route_link_list_result_from_dict = ExpressRouteLinkListResult.from_dict(express_route_link_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


