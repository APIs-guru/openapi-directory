# Routes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorizations** | **str** |  | [optional] 
**buckets** | **str** |  | [optional] 
**dashboards** | **str** |  | [optional] 
**external** | [**RoutesExternal**](RoutesExternal.md) |  | [optional] 
**flags** | **str** |  | [optional] 
**me** | **str** |  | [optional] 
**orgs** | **str** |  | [optional] 
**query** | [**RoutesQuery**](RoutesQuery.md) |  | [optional] 
**setup** | **str** |  | [optional] 
**signin** | **str** |  | [optional] 
**signout** | **str** |  | [optional] 
**sources** | **str** |  | [optional] 
**system** | [**RoutesSystem**](RoutesSystem.md) |  | [optional] 
**tasks** | **str** |  | [optional] 
**telegrafs** | **str** |  | [optional] 
**users** | **str** |  | [optional] 
**variables** | **str** |  | [optional] 
**write** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.routes import Routes

# TODO update the JSON string below
json = "{}"
# create an instance of Routes from a JSON string
routes_instance = Routes.from_json(json)
# print the JSON string representation of the object
print(Routes.to_json())

# convert the object into a dict
routes_dict = routes_instance.to_dict()
# create an instance of Routes from a dict
routes_from_dict = Routes.from_dict(routes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


