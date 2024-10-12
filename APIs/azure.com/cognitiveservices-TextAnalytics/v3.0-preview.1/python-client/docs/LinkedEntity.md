# LinkedEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | **str** | Data source used to extract entity linking, such as Wiki/Bing etc. | 
**id** | **str** | Unique identifier of the recognized entity from the data source. | [optional] 
**language** | **str** | Language used in the data source. | 
**matches** | [**List[Match]**](Match.md) | List of instances this entity appears in the text. | 
**name** | **str** | Entity Linking formal name. | 
**url** | **str** | URL for the entity&#39;s page from the data source. | 

## Example

```python
from openapi_client.models.linked_entity import LinkedEntity

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedEntity from a JSON string
linked_entity_instance = LinkedEntity.from_json(json)
# print the JSON string representation of the object
print(LinkedEntity.to_json())

# convert the object into a dict
linked_entity_dict = linked_entity_instance.to_dict()
# create an instance of LinkedEntity from a dict
linked_entity_from_dict = LinkedEntity.from_dict(linked_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


