# UniqueKey

The unique key on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paths** | **List[str]** | List of paths must be unique for each document in the Azure Cosmos DB service | [optional] 

## Example

```python
from openapi_client.models.unique_key import UniqueKey

# TODO update the JSON string below
json = "{}"
# create an instance of UniqueKey from a JSON string
unique_key_instance = UniqueKey.from_json(json)
# print the JSON string representation of the object
print(UniqueKey.to_json())

# convert the object into a dict
unique_key_dict = unique_key_instance.to_dict()
# create an instance of UniqueKey from a dict
unique_key_from_dict = UniqueKey.from_dict(unique_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


