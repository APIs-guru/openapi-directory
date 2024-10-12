# BucketAccessControls

An access-control list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[BucketAccessControl]**](BucketAccessControl.md) | The list of items. | [optional] 
**kind** | **str** | The kind of item this is. For lists of bucket access control entries, this is always storage#bucketAccessControls. | [optional] [default to 'storage#bucketAccessControls']

## Example

```python
from openapi_client.models.bucket_access_controls import BucketAccessControls

# TODO update the JSON string below
json = "{}"
# create an instance of BucketAccessControls from a JSON string
bucket_access_controls_instance = BucketAccessControls.from_json(json)
# print the JSON string representation of the object
print(BucketAccessControls.to_json())

# convert the object into a dict
bucket_access_controls_dict = bucket_access_controls_instance.to_dict()
# create an instance of BucketAccessControls from a dict
bucket_access_controls_from_dict = BucketAccessControls.from_dict(bucket_access_controls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


