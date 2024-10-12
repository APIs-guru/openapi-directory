# EntityItemDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.entity_item_describe import EntityItemDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of EntityItemDescribe from a JSON string
entity_item_describe_instance = EntityItemDescribe.from_json(json)
# print the JSON string representation of the object
print(EntityItemDescribe.to_json())

# convert the object into a dict
entity_item_describe_dict = entity_item_describe_instance.to_dict()
# create an instance of EntityItemDescribe from a dict
entity_item_describe_from_dict = EntityItemDescribe.from_dict(entity_item_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


