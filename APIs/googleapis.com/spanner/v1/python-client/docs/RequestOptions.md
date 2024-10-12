# RequestOptions

Common request options for various APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**priority** | **str** | Priority for the request. | [optional] 
**request_tag** | **str** | A per-request tag which can be applied to queries or reads, used for statistics collection. Both request_tag and transaction_tag can be specified for a read or query that belongs to a transaction. This field is ignored for requests where it&#39;s not applicable (e.g. CommitRequest). Legal characters for &#x60;request_tag&#x60; values are all printable characters (ASCII 32 - 126) and the length of a request_tag is limited to 50 characters. Values that exceed this limit are truncated. Any leading underscore (_) characters will be removed from the string. | [optional] 
**transaction_tag** | **str** | A tag used for statistics collection about this transaction. Both request_tag and transaction_tag can be specified for a read or query that belongs to a transaction. The value of transaction_tag should be the same for all requests belonging to the same transaction. If this request doesn&#39;t belong to any transaction, transaction_tag will be ignored. Legal characters for &#x60;transaction_tag&#x60; values are all printable characters (ASCII 32 - 126) and the length of a transaction_tag is limited to 50 characters. Values that exceed this limit are truncated. Any leading underscore (_) characters will be removed from the string. | [optional] 

## Example

```python
from openapi_client.models.request_options import RequestOptions

# TODO update the JSON string below
json = "{}"
# create an instance of RequestOptions from a JSON string
request_options_instance = RequestOptions.from_json(json)
# print the JSON string representation of the object
print(RequestOptions.to_json())

# convert the object into a dict
request_options_dict = request_options_instance.to_dict()
# create an instance of RequestOptions from a dict
request_options_from_dict = RequestOptions.from_dict(request_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


