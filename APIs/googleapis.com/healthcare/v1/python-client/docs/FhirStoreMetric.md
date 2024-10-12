# FhirStoreMetric

Count of resources and total storage size by type for a given FHIR store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The total count of FHIR resources in the store of this resource type. | [optional] 
**resource_type** | **str** | The FHIR resource type this metric applies to. | [optional] 
**structured_storage_size_bytes** | **str** | The total amount of structured storage used by FHIR resources of this resource type in the store. | [optional] 

## Example

```python
from openapi_client.models.fhir_store_metric import FhirStoreMetric

# TODO update the JSON string below
json = "{}"
# create an instance of FhirStoreMetric from a JSON string
fhir_store_metric_instance = FhirStoreMetric.from_json(json)
# print the JSON string representation of the object
print(FhirStoreMetric.to_json())

# convert the object into a dict
fhir_store_metric_dict = fhir_store_metric_instance.to_dict()
# create an instance of FhirStoreMetric from a dict
fhir_store_metric_from_dict = FhirStoreMetric.from_dict(fhir_store_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


