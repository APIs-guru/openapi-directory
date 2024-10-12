# FhirStoreMetrics

List of metrics for a given FHIR store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics** | [**List[FhirStoreMetric]**](FhirStoreMetric.md) | List of FhirStoreMetric by resource type. | [optional] 
**name** | **str** | The resource name of the FHIR store to get metrics for, in the format &#x60;projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.fhir_store_metrics import FhirStoreMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of FhirStoreMetrics from a JSON string
fhir_store_metrics_instance = FhirStoreMetrics.from_json(json)
# print the JSON string representation of the object
print(FhirStoreMetrics.to_json())

# convert the object into a dict
fhir_store_metrics_dict = fhir_store_metrics_instance.to_dict()
# create an instance of FhirStoreMetrics from a dict
fhir_store_metrics_from_dict = FhirStoreMetrics.from_dict(fhir_store_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


