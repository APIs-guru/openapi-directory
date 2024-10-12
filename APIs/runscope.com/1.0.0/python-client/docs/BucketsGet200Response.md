# BucketsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Bucket]**](Bucket.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from openapi_client.models.buckets_get200_response import BucketsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BucketsGet200Response from a JSON string
buckets_get200_response_instance = BucketsGet200Response.from_json(json)
# print the JSON string representation of the object
print(BucketsGet200Response.to_json())

# convert the object into a dict
buckets_get200_response_dict = buckets_get200_response_instance.to_dict()
# create an instance of BucketsGet200Response from a dict
buckets_get200_response_from_dict = BucketsGet200Response.from_dict(buckets_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


