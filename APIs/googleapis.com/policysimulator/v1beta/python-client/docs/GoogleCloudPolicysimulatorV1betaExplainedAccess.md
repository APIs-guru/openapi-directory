# GoogleCloudPolicysimulatorV1betaExplainedAccess

Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_state** | **str** | Whether the principal in the access tuple has permission to access the resource in the access tuple under the given policies. | [optional] 
**errors** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | If the AccessState is &#x60;UNKNOWN&#x60;, this field contains a list of errors explaining why the result is &#x60;UNKNOWN&#x60;. If the &#x60;AccessState&#x60; is &#x60;GRANTED&#x60; or &#x60;NOT_GRANTED&#x60;, this field is omitted. | [optional] 
**policies** | [**List[GoogleCloudPolicysimulatorV1betaExplainedPolicy]**](GoogleCloudPolicysimulatorV1betaExplainedPolicy.md) | If the AccessState is &#x60;UNKNOWN&#x60;, this field contains the policies that led to that result. If the &#x60;AccessState&#x60; is &#x60;GRANTED&#x60; or &#x60;NOT_GRANTED&#x60;, this field is omitted. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1beta_explained_access import GoogleCloudPolicysimulatorV1betaExplainedAccess

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1betaExplainedAccess from a JSON string
google_cloud_policysimulator_v1beta_explained_access_instance = GoogleCloudPolicysimulatorV1betaExplainedAccess.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1betaExplainedAccess.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1beta_explained_access_dict = google_cloud_policysimulator_v1beta_explained_access_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1betaExplainedAccess from a dict
google_cloud_policysimulator_v1beta_explained_access_from_dict = GoogleCloudPolicysimulatorV1betaExplainedAccess.from_dict(google_cloud_policysimulator_v1beta_explained_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


