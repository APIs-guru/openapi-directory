# ApplyAdminConsentsResponse

Response when all admin Consent resources in scope were processed and all affected resources were reindexed successfully. This structure will be included in the response when the operation finishes successfully.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_resources** | **str** | The number of resources (including the Consent resources) that may have consent access change. | [optional] 
**consent_apply_success** | **str** | If &#x60;validate_only&#x3D;false&#x60; in ApplyAdminConsentsRequest, this counter contains the number of Consent resources that were successfully applied. Otherwise, it is the number of Consent resources that are supported. | [optional] 
**failed_resources** | **str** | The number of resources (including the Consent resources) that ApplyAdminConsents failed to re-index. | [optional] 

## Example

```python
from openapi_client.models.apply_admin_consents_response import ApplyAdminConsentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyAdminConsentsResponse from a JSON string
apply_admin_consents_response_instance = ApplyAdminConsentsResponse.from_json(json)
# print the JSON string representation of the object
print(ApplyAdminConsentsResponse.to_json())

# convert the object into a dict
apply_admin_consents_response_dict = apply_admin_consents_response_instance.to_dict()
# create an instance of ApplyAdminConsentsResponse from a dict
apply_admin_consents_response_from_dict = ApplyAdminConsentsResponse.from_dict(apply_admin_consents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


