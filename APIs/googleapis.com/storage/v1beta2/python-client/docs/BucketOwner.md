# BucketOwner

The owner of the bucket. This is always the project team's owner group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | The entity, in the form group-groupId. | [optional] 
**entity_id** | **str** | The ID for the entity. | [optional] 

## Example

```python
from openapi_client.models.bucket_owner import BucketOwner

# TODO update the JSON string below
json = "{}"
# create an instance of BucketOwner from a JSON string
bucket_owner_instance = BucketOwner.from_json(json)
# print the JSON string representation of the object
print(BucketOwner.to_json())

# convert the object into a dict
bucket_owner_dict = bucket_owner_instance.to_dict()
# create an instance of BucketOwner from a dict
bucket_owner_from_dict = BucketOwner.from_dict(bucket_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


