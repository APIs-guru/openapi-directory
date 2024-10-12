# GoogleFirebaseAppcheckV1betaUpdateResourcePolicyRequest

Request message for the UpdateResourcePolicy method as well as an individual update message for the BatchUpdateResourcePolicies method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_policy** | [**GoogleFirebaseAppcheckV1betaResourcePolicy**](GoogleFirebaseAppcheckV1betaResourcePolicy.md) |  | [optional] 
**update_mask** | **str** | Required. A comma-separated list of names of fields in the ResourcePolicy to update. Example: &#x60;enforcement_mode&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_update_resource_policy_request import GoogleFirebaseAppcheckV1betaUpdateResourcePolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaUpdateResourcePolicyRequest from a JSON string
google_firebase_appcheck_v1beta_update_resource_policy_request_instance = GoogleFirebaseAppcheckV1betaUpdateResourcePolicyRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaUpdateResourcePolicyRequest.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_update_resource_policy_request_dict = google_firebase_appcheck_v1beta_update_resource_policy_request_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaUpdateResourcePolicyRequest from a dict
google_firebase_appcheck_v1beta_update_resource_policy_request_from_dict = GoogleFirebaseAppcheckV1betaUpdateResourcePolicyRequest.from_dict(google_firebase_appcheck_v1beta_update_resource_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


