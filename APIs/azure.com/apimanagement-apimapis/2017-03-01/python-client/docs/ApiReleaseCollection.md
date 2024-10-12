# ApiReleaseCollection

Paged Api Revision list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[ApiReleaseContract]**](ApiReleaseContract.md) | Page values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_release_collection import ApiReleaseCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ApiReleaseCollection from a JSON string
api_release_collection_instance = ApiReleaseCollection.from_json(json)
# print the JSON string representation of the object
print(ApiReleaseCollection.to_json())

# convert the object into a dict
api_release_collection_dict = api_release_collection_instance.to_dict()
# create an instance of ApiReleaseCollection from a dict
api_release_collection_from_dict = ApiReleaseCollection.from_dict(api_release_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


