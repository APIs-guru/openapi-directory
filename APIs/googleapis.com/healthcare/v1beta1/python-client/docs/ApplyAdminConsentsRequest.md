# ApplyAdminConsentsRequest

Request to apply the admin Consent resources for the specified FHIR store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_consents_list** | [**AdminConsents**](AdminConsents.md) |  | [optional] 
**validate_only** | **bool** | If true, the method only validates Consent resources to make sure they are supported. Otherwise, the method applies the aggregate consent information to update the enforcement model and reindex the FHIR resources. If all Consent resources can be applied successfully, the ApplyAdminConsentsResponse is returned containing the following fields: * &#x60;consent_apply_success&#x60; to indicate the number of Consent resources applied. * &#x60;affected_resources&#x60; to indicate the number of resources that might have had their consent access changed. If, however, one or more Consent resources are unsupported or cannot be applied, the method fails and ApplyAdminConsentsErrorDetail is is returned with details about the unsupported Consent resources. | [optional] 

## Example

```python
from openapi_client.models.apply_admin_consents_request import ApplyAdminConsentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyAdminConsentsRequest from a JSON string
apply_admin_consents_request_instance = ApplyAdminConsentsRequest.from_json(json)
# print the JSON string representation of the object
print(ApplyAdminConsentsRequest.to_json())

# convert the object into a dict
apply_admin_consents_request_dict = apply_admin_consents_request_instance.to_dict()
# create an instance of ApplyAdminConsentsRequest from a dict
apply_admin_consents_request_from_dict = ApplyAdminConsentsRequest.from_dict(apply_admin_consents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


