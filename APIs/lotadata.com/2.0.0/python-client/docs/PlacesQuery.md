# PlacesQuery

Specific filters understood and executed for this query. If your parameter is not visible here, then consult the documentation for correct usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**category** | **List[str]** | required categories | [optional] 
**limit** | **int** | maximum number of matches to return | [optional] 

## Example

```python
from openapi_client.models.places_query import PlacesQuery

# TODO update the JSON string below
json = "{}"
# create an instance of PlacesQuery from a JSON string
places_query_instance = PlacesQuery.from_json(json)
# print the JSON string representation of the object
print(PlacesQuery.to_json())

# convert the object into a dict
places_query_dict = places_query_instance.to_dict()
# create an instance of PlacesQuery from a dict
places_query_from_dict = PlacesQuery.from_dict(places_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


