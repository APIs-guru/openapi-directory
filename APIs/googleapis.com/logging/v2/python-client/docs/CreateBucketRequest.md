# CreateBucketRequest

The parameters to CreateBucket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | [**LogBucket**](LogBucket.md) |  | [optional] 
**bucket_id** | **str** | Required. A client-assigned identifier such as \&quot;my-bucket\&quot;. Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. | [optional] 
**parent** | **str** | Required. The resource in which to create the log bucket: \&quot;projects/[PROJECT_ID]/locations/[LOCATION_ID]\&quot; For example:\&quot;projects/my-project/locations/global\&quot; | [optional] 

## Example

```python
from openapi_client.models.create_bucket_request import CreateBucketRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBucketRequest from a JSON string
create_bucket_request_instance = CreateBucketRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBucketRequest.to_json())

# convert the object into a dict
create_bucket_request_dict = create_bucket_request_instance.to_dict()
# create an instance of CreateBucketRequest from a dict
create_bucket_request_from_dict = CreateBucketRequest.from_dict(create_bucket_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


