# RewriteResponse

A rewrite response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**done** | **bool** | true if the copy is finished; otherwise, false if the copy is in progress. This property is always present in the response. | [optional] 
**kind** | **str** | The kind of item this is. | [optional] [default to 'storage#rewriteResponse']
**object_size** | **str** | The total size of the object being copied in bytes. This property is always present in the response. | [optional] 
**resource** | [**Object**](Object.md) |  | [optional] 
**rewrite_token** | **str** | A token to use in subsequent requests to continue copying data. This token is present in the response only when there is more data to copy. | [optional] 
**total_bytes_rewritten** | **str** | The total bytes written so far, which can be used to provide a waiting user with a progress indicator. This property is always present in the response. | [optional] 

## Example

```python
from openapi_client.models.rewrite_response import RewriteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RewriteResponse from a JSON string
rewrite_response_instance = RewriteResponse.from_json(json)
# print the JSON string representation of the object
print(RewriteResponse.to_json())

# convert the object into a dict
rewrite_response_dict = rewrite_response_instance.to_dict()
# create an instance of RewriteResponse from a dict
rewrite_response_from_dict = RewriteResponse.from_dict(rewrite_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


