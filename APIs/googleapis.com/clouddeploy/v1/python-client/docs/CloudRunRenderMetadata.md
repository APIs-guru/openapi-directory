# CloudRunRenderMetadata

CloudRunRenderMetadata contains Cloud Run information associated with a `Release` render.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | **str** | Output only. The name of the Cloud Run Service in the rendered manifest. Format is &#x60;projects/{project}/locations/{location}/services/{service}&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cloud_run_render_metadata import CloudRunRenderMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CloudRunRenderMetadata from a JSON string
cloud_run_render_metadata_instance = CloudRunRenderMetadata.from_json(json)
# print the JSON string representation of the object
print(CloudRunRenderMetadata.to_json())

# convert the object into a dict
cloud_run_render_metadata_dict = cloud_run_render_metadata_instance.to_dict()
# create an instance of CloudRunRenderMetadata from a dict
cloud_run_render_metadata_from_dict = CloudRunRenderMetadata.from_dict(cloud_run_render_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


