# RollbackFhirResourcesResponse

Final response of rollback FIHR resources request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fhir_store** | **str** | The name of the FHIR store to rollback, in the format of \&quot;projects/{project_id}/locations/{location_id}/datasets/{dataset_id} /fhirStores/{fhir_store_id}\&quot;. | [optional] 

## Example

```python
from openapi_client.models.rollback_fhir_resources_response import RollbackFhirResourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackFhirResourcesResponse from a JSON string
rollback_fhir_resources_response_instance = RollbackFhirResourcesResponse.from_json(json)
# print the JSON string representation of the object
print(RollbackFhirResourcesResponse.to_json())

# convert the object into a dict
rollback_fhir_resources_response_dict = rollback_fhir_resources_response_instance.to_dict()
# create an instance of RollbackFhirResourcesResponse from a dict
rollback_fhir_resources_response_from_dict = RollbackFhirResourcesResponse.from_dict(rollback_fhir_resources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


