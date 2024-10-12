# ActivateConsentRequest

Activates the latest revision of the specified Consent by committing a new revision with `state` updated to `ACTIVE`. If the latest revision of the given Consent is in the `ACTIVE` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the given consent is in the `REJECTED` or `REVOKED` state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_artifact** | **str** | Required. The resource name of the Consent artifact that contains documentation of the user&#39;s consent, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}&#x60;. If the draft Consent had a Consent artifact, this Consent artifact overwrites it. | [optional] 
**expire_time** | **str** | Timestamp in UTC of when this Consent is considered expired. | [optional] 
**ttl** | **str** | The time to live for this Consent from when it is marked as active. | [optional] 

## Example

```python
from openapi_client.models.activate_consent_request import ActivateConsentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ActivateConsentRequest from a JSON string
activate_consent_request_instance = ActivateConsentRequest.from_json(json)
# print the JSON string representation of the object
print(ActivateConsentRequest.to_json())

# convert the object into a dict
activate_consent_request_dict = activate_consent_request_instance.to_dict()
# create an instance of ActivateConsentRequest from a dict
activate_consent_request_from_dict = ActivateConsentRequest.from_dict(activate_consent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


