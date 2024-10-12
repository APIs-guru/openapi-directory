# Buckets

A list of buckets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Bucket]**](Bucket.md) | The list of items. | [optional] 
**kind** | **str** | The kind of item this is. For lists of buckets, this is always storage#buckets. | [optional] [default to 'storage#buckets']
**next_page_token** | **str** | The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 

## Example

```python
from openapi_client.models.buckets import Buckets

# TODO update the JSON string below
json = "{}"
# create an instance of Buckets from a JSON string
buckets_instance = Buckets.from_json(json)
# print the JSON string representation of the object
print(Buckets.to_json())

# convert the object into a dict
buckets_dict = buckets_instance.to_dict()
# create an instance of Buckets from a dict
buckets_from_dict = Buckets.from_dict(buckets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


