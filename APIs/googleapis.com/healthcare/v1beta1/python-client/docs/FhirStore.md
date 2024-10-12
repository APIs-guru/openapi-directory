# FhirStore

Represents a FHIR store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complex_data_type_reference_parsing** | **str** | Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. | [optional] 
**consent_config** | [**ConsentConfig**](ConsentConfig.md) |  | [optional] 
**default_search_handling_strict** | **bool** | If true, overrides the default search behavior for this FHIR store to &#x60;handling&#x3D;strict&#x60; which returns an error for unrecognized search parameters. If false, uses the FHIR specification default &#x60;handling&#x3D;lenient&#x60; which ignores unrecognized search parameters. The handling can always be changed from the default on an individual API call by setting the HTTP header &#x60;Prefer: handling&#x3D;strict&#x60; or &#x60;Prefer: handling&#x3D;lenient&#x60;. | [optional] 
**disable_referential_integrity** | **bool** | Immutable. Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store creation. The default value is false, meaning that the API enforces referential integrity and fails the requests that result in inconsistent state in the FHIR store. When this field is set to true, the API skips referential integrity checks. Consequently, operations that rely on references, such as GetPatientEverything, do not return all the results if broken references exist. | [optional] 
**disable_resource_versioning** | **bool** | Immutable. Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation of FHIR store. If set to false, which is the default behavior, all write operations cause historical versions to be recorded automatically. The historical versions can be fetched through the history APIs, but cannot be updated. If set to true, no historical versions are kept. The server sends errors for attempts to read the historical versions. | [optional] 
**enable_history_modifications** | **bool** | Optional. Whether to allow ExecuteBundle to accept history bundles, and directly insert and overwrite historical resource versions into the FHIR store. If set to false, using history bundles fails with an error. | [optional] 
**enable_update_create** | **bool** | Whether this FHIR store has the [updateCreate capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate). This determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to update a non-existent resource return errors. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud audit logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. | [optional] 
**labels** | **Dict[str, str]** | User-supplied key-value pairs used to organize FHIR stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. | [optional] 
**name** | **str** | Output only. Identifier. Resource name of the FHIR store, of the form &#x60;projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}&#x60;. | [optional] 
**notification_config** | [**NotificationConfig**](NotificationConfig.md) |  | [optional] 
**notification_configs** | [**List[FhirNotificationConfig]**](FhirNotificationConfig.md) | Specifies where and whether to send notifications upon changes to a Fhir store. | [optional] 
**search_config** | [**SearchConfig**](SearchConfig.md) |  | [optional] 
**stream_configs** | [**List[StreamConfig]**](StreamConfig.md) | A list of streaming configs that configure the destinations of streaming export for every resource mutation in this FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next resource mutation is streamed to the new location in addition to the existing ones. When a location is removed from the list, the server stops streaming to that location. Before adding a new config, you must add the required [&#x60;bigquery.dataEditor&#x60;](https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor) role to your project&#39;s **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/iam/docs/service-accounts). Some lag (typically on the order of dozens of seconds) is expected before the results show up in the streaming destination. | [optional] 
**validation_config** | [**ValidationConfig**](ValidationConfig.md) |  | [optional] 
**version** | **str** | Required. Immutable. The FHIR specification version that this FHIR store supports natively. This field is immutable after store creation. Requests are rejected if they contain FHIR resources of a different version. Version is required for every FHIR store. | [optional] 

## Example

```python
from openapi_client.models.fhir_store import FhirStore

# TODO update the JSON string below
json = "{}"
# create an instance of FhirStore from a JSON string
fhir_store_instance = FhirStore.from_json(json)
# print the JSON string representation of the object
print(FhirStore.to_json())

# convert the object into a dict
fhir_store_dict = fhir_store_instance.to_dict()
# create an instance of FhirStore from a dict
fhir_store_from_dict = FhirStore.from_dict(fhir_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


