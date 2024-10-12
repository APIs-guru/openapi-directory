# BucketAutoclass

The bucket's Autoclass configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether or not Autoclass is enabled on this bucket | [optional] 
**terminal_storage_class** | **str** | The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. Valid values are NEARLINE and ARCHIVE. | [optional] 
**terminal_storage_class_update_time** | **datetime** | A date and time in RFC 3339 format representing the time of the most recent update to \&quot;terminalStorageClass\&quot;. | [optional] 
**toggle_time** | **datetime** | A date and time in RFC 3339 format representing the instant at which \&quot;enabled\&quot; was last toggled. | [optional] 

## Example

```python
from openapi_client.models.bucket_autoclass import BucketAutoclass

# TODO update the JSON string below
json = "{}"
# create an instance of BucketAutoclass from a JSON string
bucket_autoclass_instance = BucketAutoclass.from_json(json)
# print the JSON string representation of the object
print(BucketAutoclass.to_json())

# convert the object into a dict
bucket_autoclass_dict = bucket_autoclass_instance.to_dict()
# create an instance of BucketAutoclass from a dict
bucket_autoclass_from_dict = BucketAutoclass.from_dict(bucket_autoclass_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


