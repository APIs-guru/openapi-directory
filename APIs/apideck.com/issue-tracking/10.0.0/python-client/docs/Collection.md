# Collection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**description** | **str** | Description of the collection | [optional] 
**id** | **str** | A unique identifier for an object. | [readonly] 
**name** | **str** | Name of the collection | [optional] 
**parent_id** | **str** | The collections&#39;s parent ID | [optional] 
**type** | **str** | The collections&#39;s type | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.collection import Collection

# TODO update the JSON string below
json = "{}"
# create an instance of Collection from a JSON string
collection_instance = Collection.from_json(json)
# print the JSON string representation of the object
print(Collection.to_json())

# convert the object into a dict
collection_dict = collection_instance.to_dict()
# create an instance of Collection from a dict
collection_from_dict = Collection.from_dict(collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


