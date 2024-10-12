# ImportResourcesRequest

Request to import resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_structure** | **str** | The content structure in the source location. If not specified, the server treats the input source files as BUNDLE. | [optional] 
**gcs_source** | [**GoogleCloudHealthcareV1beta1FhirGcsSource**](GoogleCloudHealthcareV1beta1FhirGcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_resources_request import ImportResourcesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportResourcesRequest from a JSON string
import_resources_request_instance = ImportResourcesRequest.from_json(json)
# print the JSON string representation of the object
print(ImportResourcesRequest.to_json())

# convert the object into a dict
import_resources_request_dict = import_resources_request_instance.to_dict()
# create an instance of ImportResourcesRequest from a dict
import_resources_request_from_dict = ImportResourcesRequest.from_dict(import_resources_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


