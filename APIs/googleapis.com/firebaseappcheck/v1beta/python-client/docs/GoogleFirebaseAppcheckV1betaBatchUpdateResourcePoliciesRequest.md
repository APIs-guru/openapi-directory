# GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequest

Request message for the BatchUpdateResourcePolicies method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GoogleFirebaseAppcheckV1betaUpdateResourcePolicyRequest]**](GoogleFirebaseAppcheckV1betaUpdateResourcePolicyRequest.md) | Required. The request messages specifying the ResourcePolicys to update. A maximum of 100 objects can be updated in a batch. | [optional] 
**update_mask** | **str** | Optional. A comma-separated list of names of fields in the ResourceConfigurations to update. Example: &#x60;enforcement_mode&#x60;. If this field is present, the &#x60;update_mask&#x60; field in the UpdateResourcePolicyRequest messages must all match this field, or the entire batch fails and no updates will be committed. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_batch_update_resource_policies_request import GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequest from a JSON string
google_firebase_appcheck_v1beta_batch_update_resource_policies_request_instance = GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequest.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_batch_update_resource_policies_request_dict = google_firebase_appcheck_v1beta_batch_update_resource_policies_request_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequest from a dict
google_firebase_appcheck_v1beta_batch_update_resource_policies_request_from_dict = GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequest.from_dict(google_firebase_appcheck_v1beta_batch_update_resource_policies_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


