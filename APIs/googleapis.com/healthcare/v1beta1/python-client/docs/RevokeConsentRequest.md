# RevokeConsentRequest

Revokes the latest revision of the specified Consent by committing a new revision with `state` updated to `REVOKED`. If the latest revision of the given Consent is in the `REVOKED` state, no new revision is committed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_artifact** | **str** | Optional. The resource name of the Consent artifact that contains proof of the user&#39;s revocation of the Consent, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.revoke_consent_request import RevokeConsentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RevokeConsentRequest from a JSON string
revoke_consent_request_instance = RevokeConsentRequest.from_json(json)
# print the JSON string representation of the object
print(RevokeConsentRequest.to_json())

# convert the object into a dict
revoke_consent_request_dict = revoke_consent_request_instance.to_dict()
# create an instance of RevokeConsentRequest from a dict
revoke_consent_request_from_dict = RevokeConsentRequest.from_dict(revoke_consent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


