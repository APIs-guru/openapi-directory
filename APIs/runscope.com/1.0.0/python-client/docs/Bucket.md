# Bucket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | **str** | Bucket auth token if set, otherwise this value is null. | [optional] 
**collections_url** | **str** |  | [optional] 
**default** | **bool** | True if this bucket is the &#39;default&#39; for a team. Default buckets cannot be deleted. | [optional] 
**key** | **str** | The unique identifier used to address a bucket. | [optional] 
**messages_url** | **str** |  | [optional] 
**name** | **str** | The name of this bucket as displayed in your dashboard. | [optional] 
**team** | [**Team**](Team.md) |  | [optional] 
**tests_url** | **str** |  | [optional] 
**trigger_url** | **str** |  | [optional] 
**verify_ssl** | **bool** | True if this bucket is configured to verify ssl for requests made to it. | [optional] 

## Example

```python
from openapi_client.models.bucket import Bucket

# TODO update the JSON string below
json = "{}"
# create an instance of Bucket from a JSON string
bucket_instance = Bucket.from_json(json)
# print the JSON string representation of the object
print(Bucket.to_json())

# convert the object into a dict
bucket_dict = bucket_instance.to_dict()
# create an instance of Bucket from a dict
bucket_from_dict = Bucket.from_dict(bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


