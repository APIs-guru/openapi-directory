# IstioCanonicalService

Canonical service scoped to an Istio mesh. Anthos clusters running ASM >= 1.6.8 will have their services ingested as this type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_service** | **str** | The name of the canonical service underlying this service. Corresponds to the destination_canonical_service_name metric label in label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio). | [optional] 
**canonical_service_namespace** | **str** | The namespace of the canonical service underlying this service. Corresponds to the destination_canonical_service_namespace metric label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio). | [optional] 
**mesh_uid** | **str** | Identifier for the Istio mesh in which this canonical service is defined. Corresponds to the mesh_uid metric label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio). | [optional] 

## Example

```python
from openapi_client.models.istio_canonical_service import IstioCanonicalService

# TODO update the JSON string below
json = "{}"
# create an instance of IstioCanonicalService from a JSON string
istio_canonical_service_instance = IstioCanonicalService.from_json(json)
# print the JSON string representation of the object
print(IstioCanonicalService.to_json())

# convert the object into a dict
istio_canonical_service_dict = istio_canonical_service_instance.to_dict()
# create an instance of IstioCanonicalService from a dict
istio_canonical_service_from_dict = IstioCanonicalService.from_dict(istio_canonical_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


