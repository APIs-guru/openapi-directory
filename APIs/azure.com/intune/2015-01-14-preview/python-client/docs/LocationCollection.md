# LocationCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nextlink** | **str** | Gets the URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[Location]**](Location.md) |  | 

## Example

```python
from openapi_client.models.location_collection import LocationCollection

# TODO update the JSON string below
json = "{}"
# create an instance of LocationCollection from a JSON string
location_collection_instance = LocationCollection.from_json(json)
# print the JSON string representation of the object
print(LocationCollection.to_json())

# convert the object into a dict
location_collection_dict = location_collection_instance.to_dict()
# create an instance of LocationCollection from a dict
location_collection_from_dict = LocationCollection.from_dict(location_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


