# ApiRevisionCollection

Paged Api Revision list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ApiRevisionContract]**](ApiRevisionContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.api_revision_collection import ApiRevisionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ApiRevisionCollection from a JSON string
api_revision_collection_instance = ApiRevisionCollection.from_json(json)
# print the JSON string representation of the object
print(ApiRevisionCollection.to_json())

# convert the object into a dict
api_revision_collection_dict = api_revision_collection_instance.to_dict()
# create an instance of ApiRevisionCollection from a dict
api_revision_collection_from_dict = ApiRevisionCollection.from_dict(api_revision_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


