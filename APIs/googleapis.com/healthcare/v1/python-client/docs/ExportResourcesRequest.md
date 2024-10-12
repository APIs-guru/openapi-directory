# ExportResourcesRequest

Request to export resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**since** | **str** | If provided, only resources updated after this time are exported. The time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, &#x60;2015-02-07T13:28:17.239+02:00&#x60; or &#x60;2017-01-01T00:00:00Z&#x60;. The time must be specified to the second and include a time zone. | [optional] 
**type** | **str** | String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are exported. | [optional] 
**bigquery_destination** | [**GoogleCloudHealthcareV1FhirBigQueryDestination**](GoogleCloudHealthcareV1FhirBigQueryDestination.md) |  | [optional] 
**gcs_destination** | [**GoogleCloudHealthcareV1FhirGcsDestination**](GoogleCloudHealthcareV1FhirGcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_resources_request import ExportResourcesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportResourcesRequest from a JSON string
export_resources_request_instance = ExportResourcesRequest.from_json(json)
# print the JSON string representation of the object
print(ExportResourcesRequest.to_json())

# convert the object into a dict
export_resources_request_dict = export_resources_request_instance.to_dict()
# create an instance of ExportResourcesRequest from a dict
export_resources_request_from_dict = ExportResourcesRequest.from_dict(export_resources_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


