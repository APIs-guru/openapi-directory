# GoogleChromePolicyVersionsV1PolicyModificationErrorDetails

Details of the errors encountered during a policy modification request. This message will be returned as part of the details of a google.rpc.Status returned to the user when there is an error in their request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modification_errors** | [**List[GoogleChromePolicyVersionsV1PolicyModificationError]**](GoogleChromePolicyVersionsV1PolicyModificationError.md) | Output only. List of specific policy modifications errors that may have occurred during a modifying request. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_policy_modification_error_details import GoogleChromePolicyVersionsV1PolicyModificationErrorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1PolicyModificationErrorDetails from a JSON string
google_chrome_policy_versions_v1_policy_modification_error_details_instance = GoogleChromePolicyVersionsV1PolicyModificationErrorDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1PolicyModificationErrorDetails.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_policy_modification_error_details_dict = google_chrome_policy_versions_v1_policy_modification_error_details_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1PolicyModificationErrorDetails from a dict
google_chrome_policy_versions_v1_policy_modification_error_details_from_dict = GoogleChromePolicyVersionsV1PolicyModificationErrorDetails.from_dict(google_chrome_policy_versions_v1_policy_modification_error_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


