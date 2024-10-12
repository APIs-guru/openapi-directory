# ListBucketsResponse

The response returned by `ListBuckets`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | [**List[Bucket]**](Bucket.md) | The list of linked buckets. | [optional] 
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

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


