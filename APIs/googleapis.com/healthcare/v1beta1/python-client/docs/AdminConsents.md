# AdminConsents

List of admin Consent resources to be applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | The versioned names of the admin Consent resource(s), in the format &#x60;projects/{project_id}/locations/{location}/datasets/{dataset_id}/fhirStores/{fhir_store_id}/fhir/Consent/{resource_id}/_history/{version_id}&#x60;. For FHIR stores with &#x60;disable_resource_versioning&#x3D;true&#x60;, the format is &#x60;projects/{project_id}/locations/{location}/datasets/{dataset_id}/fhirStores/{fhir_store_id}/fhir/Consent/{resource_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.admin_consents import AdminConsents

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConsents from a JSON string
admin_consents_instance = AdminConsents.from_json(json)
# print the JSON string representation of the object
print(AdminConsents.to_json())

# convert the object into a dict
admin_consents_dict = admin_consents_instance.to_dict()
# create an instance of AdminConsents from a dict
admin_consents_from_dict = AdminConsents.from_dict(admin_consents_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


