# Consent

Represents a user's consent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_artifact** | **str** | Required. The resource name of the Consent artifact that contains proof of the end user&#39;s consent, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}&#x60;. | [optional] 
**expire_time** | **str** | Timestamp in UTC of when this Consent is considered expired. | [optional] 
**metadata** | **Dict[str, str]** | Optional. User-supplied key-value pairs used to organize Consent resources. Metadata keys must: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - begin with a letter - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes Metadata values must be: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes No more than 64 metadata entries can be associated with a given consent. | [optional] 
**name** | **str** | Identifier. Resource name of the Consent, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}&#x60;. Cannot be changed after creation. | [optional] 
**policies** | [**List[GoogleCloudHealthcareV1beta1ConsentPolicy]**](GoogleCloudHealthcareV1beta1ConsentPolicy.md) | Optional. Represents a user&#39;s consent in terms of the resources that can be accessed and under what conditions. | [optional] 
**revision_create_time** | **str** | Output only. The timestamp that the revision was created. | [optional] [readonly] 
**revision_id** | **str** | Output only. The revision ID of the Consent. The format is an 8-character hexadecimal string. Refer to a specific revision of a Consent by appending &#x60;@{revision_id}&#x60; to the Consent&#39;s resource name. | [optional] [readonly] 
**state** | **str** | Required. Indicates the current state of this Consent. | [optional] 
**ttl** | **str** | Input only. The time to live for this Consent from when it is created. | [optional] 
**user_id** | **str** | Required. User&#39;s UUID provided by the client. | [optional] 

## Example

```python
from openapi_client.models.consent import Consent

# TODO update the JSON string below
json = "{}"
# create an instance of Consent from a JSON string
consent_instance = Consent.from_json(json)
# print the JSON string representation of the object
print(Consent.to_json())

# convert the object into a dict
consent_dict = consent_instance.to_dict()
# create an instance of Consent from a dict
consent_from_dict = Consent.from_dict(consent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


