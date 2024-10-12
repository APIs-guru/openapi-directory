# FabricCollection

Collection of fabric details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[Fabric]**](Fabric.md) | The fabric details. | [optional] 

## Example

```python
from openapi_client.models.fabric_collection import FabricCollection

# TODO update the JSON string below
json = "{}"
# create an instance of FabricCollection from a JSON string
fabric_collection_instance = FabricCollection.from_json(json)
# print the JSON string representation of the object
print(FabricCollection.to_json())

# convert the object into a dict
fabric_collection_dict = fabric_collection_instance.to_dict()
# create an instance of FabricCollection from a dict
fabric_collection_from_dict = FabricCollection.from_dict(fabric_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


