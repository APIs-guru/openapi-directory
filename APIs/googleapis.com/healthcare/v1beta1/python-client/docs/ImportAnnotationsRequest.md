# ImportAnnotationsRequest

Request to import Annotations. The Annotations to be imported must have client-supplied resource names which indicate the annotation resource. The import operation is not atomic. If a failure occurs, any annotations already imported are not removed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GoogleCloudHealthcareV1beta1AnnotationGcsSource**](GoogleCloudHealthcareV1beta1AnnotationGcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_annotations_request import ImportAnnotationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportAnnotationsRequest from a JSON string
import_annotations_request_instance = ImportAnnotationsRequest.from_json(json)
# print the JSON string representation of the object
print(ImportAnnotationsRequest.to_json())

# convert the object into a dict
import_annotations_request_dict = import_annotations_request_instance.to_dict()
# create an instance of ImportAnnotationsRequest from a dict
import_annotations_request_from_dict = ImportAnnotationsRequest.from_dict(import_annotations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


