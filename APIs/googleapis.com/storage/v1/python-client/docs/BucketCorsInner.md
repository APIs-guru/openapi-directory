# BucketCorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_age_seconds** | **int** | The value, in seconds, to return in the  Access-Control-Max-Age header used in preflight responses. | [optional] 
**method** | **List[str]** | The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: \&quot;*\&quot; is permitted in the list of methods, and means \&quot;any method\&quot;. | [optional] 
**origin** | **List[str]** | The list of Origins eligible to receive CORS response headers. Note: \&quot;*\&quot; is permitted in the list of origins, and means \&quot;any Origin\&quot;. | [optional] 
**response_header** | **List[str]** | The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains. | [optional] 

## Example

```python
from openapi_client.models.bucket_cors_inner import BucketCorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BucketCorsInner from a JSON string
bucket_cors_inner_instance = BucketCorsInner.from_json(json)
# print the JSON string representation of the object
print(BucketCorsInner.to_json())

# convert the object into a dict
bucket_cors_inner_dict = bucket_cors_inner_instance.to_dict()
# create an instance of BucketCorsInner from a dict
bucket_cors_inner_from_dict = BucketCorsInner.from_dict(bucket_cors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


