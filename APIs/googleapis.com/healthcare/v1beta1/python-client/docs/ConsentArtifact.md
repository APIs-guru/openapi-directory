# ConsentArtifact

Documentation of a user's consent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_content_screenshots** | [**List[Image]**](Image.md) | Optional. Screenshots, PDFs, or other binary information documenting the user&#39;s consent. | [optional] 
**consent_content_version** | **str** | Optional. An string indicating the version of the consent information shown to the user. | [optional] 
**guardian_signature** | [**Signature**](Signature.md) |  | [optional] 
**metadata** | **Dict[str, str]** | Optional. Metadata associated with the Consent artifact. For example, the consent locale or user agent version. | [optional] 
**name** | **str** | Identifier. Resource name of the Consent artifact, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}&#x60;. Cannot be changed after creation. | [optional] 
**user_id** | **str** | Required. User&#39;s UUID provided by the client. | [optional] 
**user_signature** | [**Signature**](Signature.md) |  | [optional] 
**witness_signature** | [**Signature**](Signature.md) |  | [optional] 

## Example

```python
from openapi_client.models.consent_artifact import ConsentArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of ConsentArtifact from a JSON string
consent_artifact_instance = ConsentArtifact.from_json(json)
# print the JSON string representation of the object
print(ConsentArtifact.to_json())

# convert the object into a dict
consent_artifact_dict = consent_artifact_instance.to_dict()
# create an instance of ConsentArtifact from a dict
consent_artifact_from_dict = ConsentArtifact.from_dict(consent_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


