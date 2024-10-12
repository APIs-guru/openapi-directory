# RejectConsentRequest

Rejects the latest revision of the specified Consent by committing a new revision with `state` updated to `REJECTED`. If the latest revision of the given Consent is in the `REJECTED` state, no new revision is committed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_artifact** | **str** | Optional. The resource name of the Consent artifact that contains documentation of the user&#39;s rejection of the draft Consent, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}&#x60;. If the draft Consent had a Consent artifact, this Consent artifact overwrites it. | [optional] 

## Example

```python
from openapi_client.models.reject_consent_request import RejectConsentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RejectConsentRequest from a JSON string
reject_consent_request_instance = RejectConsentRequest.from_json(json)
# print the JSON string representation of the object
print(RejectConsentRequest.to_json())

# convert the object into a dict
reject_consent_request_dict = reject_consent_request_instance.to_dict()
# create an instance of RejectConsentRequest from a dict
reject_consent_request_from_dict = RejectConsentRequest.from_dict(reject_consent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


