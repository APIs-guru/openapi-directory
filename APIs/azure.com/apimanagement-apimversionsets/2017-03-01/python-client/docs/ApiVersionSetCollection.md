# ApiVersionSetCollection

Paged Api Version Set list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ApiVersionSetContract]**](ApiVersionSetContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.api_version_set_collection import ApiVersionSetCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ApiVersionSetCollection from a JSON string
api_version_set_collection_instance = ApiVersionSetCollection.from_json(json)
# print the JSON string representation of the object
print(ApiVersionSetCollection.to_json())

# convert the object into a dict
api_version_set_collection_dict = api_version_set_collection_instance.to_dict()
# create an instance of ApiVersionSetCollection from a dict
api_version_set_collection_from_dict = ApiVersionSetCollection.from_dict(api_version_set_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


