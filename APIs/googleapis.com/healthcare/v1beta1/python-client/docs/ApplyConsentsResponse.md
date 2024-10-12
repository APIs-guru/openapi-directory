# ApplyConsentsResponse

Response when all Consent resources in scope were processed and all affected resources were reindexed successfully. This structure is included in the response when the operation finishes successfully.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_resources** | **str** | The number of resources (including the Consent resources) that may have consensual access change. | [optional] 
**consent_apply_failure** | **str** | If &#x60;validate_only &#x3D; false&#x60; in ApplyConsentsRequest, this counter is the number of Consent resources that were failed to apply. Otherwise, it is the number of Consent resources that are not supported or invalid. | [optional] 
**consent_apply_success** | **str** | If &#x60;validate_only &#x3D; false&#x60; in ApplyConsentsRequest, this counter is the number of Consent resources that were successfully applied. Otherwise, it is the number of Consent resources that are supported. | [optional] 
**failed_resources** | **str** | The number of resources (including the Consent resources) that ApplyConsents failed to re-index. | [optional] 

## Example

```python
from openapi_client.models.apply_consents_response import ApplyConsentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyConsentsResponse from a JSON string
apply_consents_response_instance = ApplyConsentsResponse.from_json(json)
# print the JSON string representation of the object
print(ApplyConsentsResponse.to_json())

# convert the object into a dict
apply_consents_response_dict = apply_consents_response_instance.to_dict()
# create an instance of ApplyConsentsResponse from a dict
apply_consents_response_from_dict = ApplyConsentsResponse.from_dict(apply_consents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


