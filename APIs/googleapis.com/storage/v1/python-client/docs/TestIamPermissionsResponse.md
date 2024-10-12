# TestIamPermissionsResponse

A storage.(buckets|objects|managedFolders).testIamPermissions response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of item this is. | [optional] [default to 'storage#testIamPermissionsResponse']
**permissions** | **List[str]** | The permissions held by the caller. Permissions are always of the format storage.resource.capability, where resource is one of buckets, objects, or managedFolders. The supported permissions are as follows:   - storage.buckets.delete — Delete bucket.   - storage.buckets.get — Read bucket metadata.   - storage.buckets.getIamPolicy — Read bucket IAM policy.   - storage.buckets.create — Create bucket.   - storage.buckets.list — List buckets.   - storage.buckets.setIamPolicy — Update bucket IAM policy.   - storage.buckets.update — Update bucket metadata.   - storage.objects.delete — Delete object.   - storage.objects.get — Read object data and metadata.   - storage.objects.getIamPolicy — Read object IAM policy.   - storage.objects.create — Create object.   - storage.objects.list — List objects.   - storage.objects.setIamPolicy — Update object IAM policy.   - storage.objects.update — Update object metadata.  - storage.managedFolders.delete — Delete managed folder.   - storage.managedFolders.get — Read managed folder metadata.   - storage.managedFolders.getIamPolicy — Read managed folder IAM policy.   - storage.managedFolders.create — Create managed folder.   - storage.managedFolders.list — List managed folders.   - storage.managedFolders.setIamPolicy — Update managed folder IAM policy. | [optional] 

## Example

```python
from openapi_client.models.test_iam_permissions_response import TestIamPermissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TestIamPermissionsResponse from a JSON string
test_iam_permissions_response_instance = TestIamPermissionsResponse.from_json(json)
# print the JSON string representation of the object
print(TestIamPermissionsResponse.to_json())

# convert the object into a dict
test_iam_permissions_response_dict = test_iam_permissions_response_instance.to_dict()
# create an instance of TestIamPermissionsResponse from a dict
test_iam_permissions_response_from_dict = TestIamPermissionsResponse.from_dict(test_iam_permissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


