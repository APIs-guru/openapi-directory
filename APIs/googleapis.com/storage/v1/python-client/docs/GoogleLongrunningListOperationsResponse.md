# GoogleLongrunningListOperationsResponse

The response message for storage.buckets.operations.list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 
**operations** | [**List[GoogleLongrunningOperation]**](GoogleLongrunningOperation.md) | A list of operations that matches the specified filter in the request. | [optional] 

## Example

```python
from openapi_client.models.google_longrunning_list_operations_response import GoogleLongrunningListOperationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleLongrunningListOperationsResponse from a JSON string
google_longrunning_list_operations_response_instance = GoogleLongrunningListOperationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleLongrunningListOperationsResponse.to_json())

# convert the object into a dict
google_longrunning_list_operations_response_dict = google_longrunning_list_operations_response_instance.to_dict()
# create an instance of GoogleLongrunningListOperationsResponse from a dict
google_longrunning_list_operations_response_from_dict = GoogleLongrunningListOperationsResponse.from_dict(google_longrunning_list_operations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


