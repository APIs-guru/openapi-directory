# ReportMetadatas

This type defines the metadata used by the all report types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_metadata** | [**List[ReportMetadata]**](ReportMetadata.md) | A list of the metadata for the associated report type. | [optional] 

## Example

```python
from openapi_client.models.report_metadatas import ReportMetadatas

# TODO update the JSON string below
json = "{}"
# create an instance of ReportMetadatas from a JSON string
report_metadatas_instance = ReportMetadatas.from_json(json)
# print the JSON string representation of the object
print(ReportMetadatas.to_json())

# convert the object into a dict
report_metadatas_dict = report_metadatas_instance.to_dict()
# create an instance of ReportMetadatas from a dict
report_metadatas_from_dict = ReportMetadatas.from_dict(report_metadatas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


