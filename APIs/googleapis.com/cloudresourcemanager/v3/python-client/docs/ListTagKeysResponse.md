# ListTagKeysResponse

The ListTagKeys response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A pagination token returned from a previous call to &#x60;ListTagKeys&#x60; that indicates from where listing should continue. | [optional] 
**tag_keys** | [**List[TagKey]**](TagKey.md) | List of TagKeys that live under the specified parent in the request. | [optional] 

## Example

```python
from openapi_client.models.list_tag_keys_response import ListTagKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTagKeysResponse from a JSON string
list_tag_keys_response_instance = ListTagKeysResponse.from_json(json)
# print the JSON string representation of the object
print(ListTagKeysResponse.to_json())

# convert the object into a dict
list_tag_keys_response_dict = list_tag_keys_response_instance.to_dict()
# create an instance of ListTagKeysResponse from a dict
list_tag_keys_response_from_dict = ListTagKeysResponse.from_dict(list_tag_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


