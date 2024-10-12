# ContentKeyPolicyCollection

A collection of ContentKeyPolicy items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** | A link to the next page of the collection (when the collection contains too many results to return in one response). | [optional] 
**value** | [**List[ContentKeyPolicy]**](ContentKeyPolicy.md) | A collection of ContentKeyPolicy items. | [optional] 

## Example

```python
from openapi_client.models.content_key_policy_collection import ContentKeyPolicyCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyCollection from a JSON string
content_key_policy_collection_instance = ContentKeyPolicyCollection.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyCollection.to_json())

# convert the object into a dict
content_key_policy_collection_dict = content_key_policy_collection_instance.to_dict()
# create an instance of ContentKeyPolicyCollection from a dict
content_key_policy_collection_from_dict = ContentKeyPolicyCollection.from_dict(content_key_policy_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


