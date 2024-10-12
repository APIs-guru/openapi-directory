# GcsData

In a GcsData resource, an object's name is the Cloud Storage object's name and its \"last modification time\" refers to the object's `updated` property of Cloud Storage objects, which changes when the content or the metadata of the object is updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_name** | **str** | Required. Cloud Storage bucket name. Must meet [Bucket Name Requirements](/storage/docs/naming#requirements). | [optional] 
**managed_folder_transfer_enabled** | **bool** | Transfer managed folders is in public preview. This option is only applicable to the Cloud Storage source bucket. If set to true: - The source managed folder will be transferred to the destination bucket - The destination managed folder will always be overwritten, other OVERWRITE options will not be supported | [optional] 
**path** | **str** | Root path to transfer objects. Must be an empty string or full path name that ends with a &#39;/&#39;. This field is treated as an object prefix. As such, it should generally not begin with a &#39;/&#39;. The root path value must meet [Object Name Requirements](/storage/docs/naming#objectnames). | [optional] 

## Example

```python
from openapi_client.models.gcs_data import GcsData

# TODO update the JSON string below
json = "{}"
# create an instance of GcsData from a JSON string
gcs_data_instance = GcsData.from_json(json)
# print the JSON string representation of the object
print(GcsData.to_json())

# convert the object into a dict
gcs_data_dict = gcs_data_instance.to_dict()
# create an instance of GcsData from a dict
gcs_data_from_dict = GcsData.from_dict(gcs_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


