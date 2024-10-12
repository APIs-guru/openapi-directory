# ExportSBOMRequest

The request to generate and export SBOM. Target must be specified for the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_storage_location** | **object** | Empty placeholder to denote that this is a Google Cloud Storage export request. | [optional] 

## Example

```python
from openapi_client.models.export_sbom_request import ExportSBOMRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportSBOMRequest from a JSON string
export_sbom_request_instance = ExportSBOMRequest.from_json(json)
# print the JSON string representation of the object
print(ExportSBOMRequest.to_json())

# convert the object into a dict
export_sbom_request_dict = export_sbom_request_instance.to_dict()
# create an instance of ExportSBOMRequest from a dict
export_sbom_request_from_dict = ExportSBOMRequest.from_dict(export_sbom_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


