# RoutesQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyze** | **str** |  | [optional] 
**ast** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 
**suggestions** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.routes_query import RoutesQuery

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesQuery from a JSON string
routes_query_instance = RoutesQuery.from_json(json)
# print the JSON string representation of the object
print(RoutesQuery.to_json())

# convert the object into a dict
routes_query_dict = routes_query_instance.to_dict()
# create an instance of RoutesQuery from a dict
routes_query_from_dict = RoutesQuery.from_dict(routes_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


