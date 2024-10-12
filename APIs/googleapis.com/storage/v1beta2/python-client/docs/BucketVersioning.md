# BucketVersioning

The bucket's versioning configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | While set to true, versioning is fully enabled for this bucket. | [optional] 

## Example

```python
from openapi_client.models.bucket_versioning import BucketVersioning

# TODO update the JSON string below
json = "{}"
# create an instance of BucketVersioning from a JSON string
bucket_versioning_instance = BucketVersioning.from_json(json)
# print the JSON string representation of the object
print(BucketVersioning.to_json())

# convert the object into a dict
bucket_versioning_dict = bucket_versioning_instance.to_dict()
# create an instance of BucketVersioning from a dict
bucket_versioning_from_dict = BucketVersioning.from_dict(bucket_versioning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


