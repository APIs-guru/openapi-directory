# ApiCollection

Paged Api list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[ApiContract]**](ApiContract.md) | Page values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_collection import ApiCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ApiCollection from a JSON string
api_collection_instance = ApiCollection.from_json(json)
# print the JSON string representation of the object
print(ApiCollection.to_json())

# convert the object into a dict
api_collection_dict = api_collection_instance.to_dict()
# create an instance of ApiCollection from a dict
api_collection_from_dict = ApiCollection.from_dict(api_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


