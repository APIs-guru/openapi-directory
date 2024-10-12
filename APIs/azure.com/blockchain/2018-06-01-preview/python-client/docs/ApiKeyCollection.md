# ApiKeyCollection

Collection of the API key payload which is exposed in the response of the resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | [**List[ApiKey]**](ApiKey.md) | Gets or sets the collection of API key. | [optional] 

## Example

```python
from openapi_client.models.api_key_collection import ApiKeyCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyCollection from a JSON string
api_key_collection_instance = ApiKeyCollection.from_json(json)
# print the JSON string representation of the object
print(ApiKeyCollection.to_json())

# convert the object into a dict
api_key_collection_dict = api_key_collection_instance.to_dict()
# create an instance of ApiKeyCollection from a dict
api_key_collection_from_dict = ApiKeyCollection.from_dict(api_key_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


