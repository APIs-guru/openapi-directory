# ShareCollectionResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**ResourceAttributes**](ResourceAttributes.md) |  | [optional] 
**id** | **int** |  | [optional] 
**relationships** | [**ResourceRelationships**](ResourceRelationships.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.share_collection_response_included_inner import ShareCollectionResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of ShareCollectionResponseIncludedInner from a JSON string
share_collection_response_included_inner_instance = ShareCollectionResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(ShareCollectionResponseIncludedInner.to_json())

# convert the object into a dict
share_collection_response_included_inner_dict = share_collection_response_included_inner_instance.to_dict()
# create an instance of ShareCollectionResponseIncludedInner from a dict
share_collection_response_included_inner_from_dict = ShareCollectionResponseIncludedInner.from_dict(share_collection_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


