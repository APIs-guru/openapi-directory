# SchemaCollection

The response of the list schema operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[SchemaContract]**](SchemaContract.md) | Api Schema Contract value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.schema_collection import SchemaCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaCollection from a JSON string
schema_collection_instance = SchemaCollection.from_json(json)
# print the JSON string representation of the object
print(SchemaCollection.to_json())

# convert the object into a dict
schema_collection_dict = schema_collection_instance.to_dict()
# create an instance of SchemaCollection from a dict
schema_collection_from_dict = SchemaCollection.from_dict(schema_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


