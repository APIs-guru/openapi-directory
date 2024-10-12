# DefaultPool

Execution using the default Cloud Build pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_storage** | **str** | Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket (\&quot;gs://my-bucket\&quot;) or a path within a bucket (\&quot;gs://my-bucket/my-dir\&quot;). If unspecified, a default bucket located in the same region will be used. | [optional] 
**service_account** | **str** | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used. | [optional] 

## Example

```python
from openapi_client.models.default_pool import DefaultPool

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultPool from a JSON string
default_pool_instance = DefaultPool.from_json(json)
# print the JSON string representation of the object
print(DefaultPool.to_json())

# convert the object into a dict
default_pool_dict = default_pool_instance.to_dict()
# create an instance of DefaultPool from a dict
default_pool_from_dict = DefaultPool.from_dict(default_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


