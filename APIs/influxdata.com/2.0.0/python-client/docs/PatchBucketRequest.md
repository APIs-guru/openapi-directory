# PatchBucketRequest

Updates to an existing bucket resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**retention_rules** | [**List[PatchRetentionRule]**](PatchRetentionRule.md) | Updates to rules to expire or retain data. No rules means no updates. | [optional] 

## Example

```python
from openapi_client.models.patch_bucket_request import PatchBucketRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchBucketRequest from a JSON string
patch_bucket_request_instance = PatchBucketRequest.from_json(json)
# print the JSON string representation of the object
print(PatchBucketRequest.to_json())

# convert the object into a dict
patch_bucket_request_dict = patch_bucket_request_instance.to_dict()
# create an instance of PatchBucketRequest from a dict
patch_bucket_request_from_dict = PatchBucketRequest.from_dict(patch_bucket_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


