# SkaffoldGCSSource

Cloud Storage bucket containing Skaffold Config modules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Optional. Relative path from the source to the Skaffold file. | [optional] 
**source** | **str** | Required. Cloud Storage source paths to copy recursively. For example, providing \&quot;gs://my-bucket/dir/configs/*\&quot; will result in Skaffold copying all files within the \&quot;dir/configs\&quot; directory in the bucket \&quot;my-bucket\&quot;. | [optional] 

## Example

```python
from openapi_client.models.skaffold_gcs_source import SkaffoldGCSSource

# TODO update the JSON string below
json = "{}"
# create an instance of SkaffoldGCSSource from a JSON string
skaffold_gcs_source_instance = SkaffoldGCSSource.from_json(json)
# print the JSON string representation of the object
print(SkaffoldGCSSource.to_json())

# convert the object into a dict
skaffold_gcs_source_dict = skaffold_gcs_source_instance.to_dict()
# create an instance of SkaffoldGCSSource from a dict
skaffold_gcs_source_from_dict = SkaffoldGCSSource.from_dict(skaffold_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


