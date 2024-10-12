# ApiTokenCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ApiToken]**](ApiToken.md) | The collection of api tokens. | 

## Example

```python
from openapi_client.models.api_token_collection import ApiTokenCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTokenCollection from a JSON string
api_token_collection_instance = ApiTokenCollection.from_json(json)
# print the JSON string representation of the object
print(ApiTokenCollection.to_json())

# convert the object into a dict
api_token_collection_dict = api_token_collection_instance.to_dict()
# create an instance of ApiTokenCollection from a dict
api_token_collection_from_dict = ApiTokenCollection.from_dict(api_token_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


