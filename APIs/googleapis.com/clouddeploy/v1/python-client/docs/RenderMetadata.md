# RenderMetadata

RenderMetadata includes information associated with a `Release` render.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_run** | [**CloudRunRenderMetadata**](CloudRunRenderMetadata.md) |  | [optional] 
**custom** | [**CustomMetadata**](CustomMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.render_metadata import RenderMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of RenderMetadata from a JSON string
render_metadata_instance = RenderMetadata.from_json(json)
# print the JSON string representation of the object
print(RenderMetadata.to_json())

# convert the object into a dict
render_metadata_dict = render_metadata_instance.to_dict()
# create an instance of RenderMetadata from a dict
render_metadata_from_dict = RenderMetadata.from_dict(render_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


