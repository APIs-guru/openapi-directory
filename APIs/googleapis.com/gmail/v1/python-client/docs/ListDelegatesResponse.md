# ListDelegatesResponse

Response for the ListDelegates method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delegates** | [**List[Delegate]**](Delegate.md) | List of the user&#39;s delegates (with any verification status). If an account doesn&#39;t have delegates, this field doesn&#39;t appear. | [optional] 

## Example

```python
from openapi_client.models.list_delegates_response import ListDelegatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDelegatesResponse from a JSON string
list_delegates_response_instance = ListDelegatesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDelegatesResponse.to_json())

# convert the object into a dict
list_delegates_response_dict = list_delegates_response_instance.to_dict()
# create an instance of ListDelegatesResponse from a dict
list_delegates_response_from_dict = ListDelegatesResponse.from_dict(list_delegates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


