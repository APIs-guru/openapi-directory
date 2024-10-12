# ListBucketsResponse

The response from ListBuckets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | [**List[LogBucket]**](LogBucket.md) | A list of buckets. | [optional] 
**next_page_token** | **str** | If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. | [optional] 

## Example

```python
from openapi_client.models.list_buckets_response import ListBucketsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBucketsResponse from a JSON string
list_buckets_response_instance = ListBucketsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBucketsResponse.to_json())

# convert the object into a dict
list_buckets_response_dict = list_buckets_response_instance.to_dict()
# create an instance of ListBucketsResponse from a dict
list_buckets_response_from_dict = ListBucketsResponse.from_dict(list_buckets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


