# PrivatePool

Execution using a private Cloud Build pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_storage** | **str** | Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket (\&quot;gs://my-bucket\&quot;) or a path within a bucket (\&quot;gs://my-bucket/my-dir\&quot;). If unspecified, a default bucket located in the same region will be used. | [optional] 
**service_account** | **str** | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used. | [optional] 
**worker_pool** | **str** | Required. Resource name of the Cloud Build worker pool to use. The format is &#x60;projects/{project}/locations/{location}/workerPools/{pool}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.private_pool import PrivatePool

# TODO update the JSON string below
json = "{}"
# create an instance of PrivatePool from a JSON string
private_pool_instance = PrivatePool.from_json(json)
# print the JSON string representation of the object
print(PrivatePool.to_json())

# convert the object into a dict
private_pool_dict = private_pool_instance.to_dict()
# create an instance of PrivatePool from a dict
private_pool_from_dict = PrivatePool.from_dict(private_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


