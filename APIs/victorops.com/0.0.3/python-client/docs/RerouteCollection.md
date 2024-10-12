# RerouteCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reroutes** | [**List[Reroute]**](Reroute.md) |  | 
**user_name** | **str** |  | 

## Example

```python
from openapi_client.models.reroute_collection import RerouteCollection

# TODO update the JSON string below
json = "{}"
# create an instance of RerouteCollection from a JSON string
reroute_collection_instance = RerouteCollection.from_json(json)
# print the JSON string representation of the object
print(RerouteCollection.to_json())

# convert the object into a dict
reroute_collection_dict = reroute_collection_instance.to_dict()
# create an instance of RerouteCollection from a dict
reroute_collection_from_dict = RerouteCollection.from_dict(reroute_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


