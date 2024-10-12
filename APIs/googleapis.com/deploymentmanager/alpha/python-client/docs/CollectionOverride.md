# CollectionOverride

CollectionOverride allows resource handling overrides for specific resources within a BaseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | **str** | The collection that identifies this resource within its service. | [optional] 
**method_map** | [**MethodMap**](MethodMap.md) |  | [optional] 
**options** | [**Options**](Options.md) |  | [optional] 

## Example

```python
from openapi_client.models.collection_override import CollectionOverride

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionOverride from a JSON string
collection_override_instance = CollectionOverride.from_json(json)
# print the JSON string representation of the object
print(CollectionOverride.to_json())

# convert the object into a dict
collection_override_dict = collection_override_instance.to_dict()
# create an instance of CollectionOverride from a dict
collection_override_from_dict = CollectionOverride.from_dict(collection_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


