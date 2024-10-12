# ListMeta

Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_continue** | **str** | Continuation token is a value emitted when the count of items is larger than the user/system limit. To retrieve the next page of items, pass the value of &#x60;continue&#x60; as the next request&#39;s &#x60;page_token&#x60;. | [optional] 
**resource_version** | **str** | Opaque string that identifies the server&#39;s internal version of this object. It can be used by clients to determine when objects have changed. If the message is passed back to the server, it must be left unmodified. | [optional] 
**self_link** | **str** | URL representing this object. | [optional] 

## Example

```python
from openapi_client.models.list_meta import ListMeta

# TODO update the JSON string below
json = "{}"
# create an instance of ListMeta from a JSON string
list_meta_instance = ListMeta.from_json(json)
# print the JSON string representation of the object
print(ListMeta.to_json())

# convert the object into a dict
list_meta_dict = list_meta_instance.to_dict()
# create an instance of ListMeta from a dict
list_meta_from_dict = ListMeta.from_dict(list_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


