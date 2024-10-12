# ImportSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ImportSourceCredentials**](ImportSourceCredentials.md) |  | [optional] 
**registry_uri** | **str** | The address of the source registry (e.g. &#39;mcr.microsoft.com&#39;). | [optional] 
**resource_id** | **str** | The resource identifier of the source Azure Container Registry. | [optional] 
**source_image** | **str** | Repository name of the source image.  Specify an image by repository (&#39;hello-world&#39;). This will use the &#39;latest&#39; tag.  Specify an image by tag (&#39;hello-world:latest&#39;).  Specify an image by sha256-based manifest digest (&#39;hello-world@sha256:abc123&#39;). | 

## Example

```python
from openapi_client.models.import_source import ImportSource

# TODO update the JSON string below
json = "{}"
# create an instance of ImportSource from a JSON string
import_source_instance = ImportSource.from_json(json)
# print the JSON string representation of the object
print(ImportSource.to_json())

# convert the object into a dict
import_source_dict = import_source_instance.to_dict()
# create an instance of ImportSource from a dict
import_source_from_dict = ImportSource.from_dict(import_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


