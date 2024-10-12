# GoogleCloudPolicyanalyzerV1beta1Activity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity** | **Dict[str, object]** | A struct of custom fields to explain the activity. | [optional] 
**activity_type** | **str** | The type of the activity. | [optional] 
**full_resource_name** | **str** | The full resource name that identifies the resource. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. | [optional] 
**observation_period** | [**GoogleCloudPolicyanalyzerV1beta1ObservationPeriod**](GoogleCloudPolicyanalyzerV1beta1ObservationPeriod.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policyanalyzer_v1beta1_activity import GoogleCloudPolicyanalyzerV1beta1Activity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicyanalyzerV1beta1Activity from a JSON string
google_cloud_policyanalyzer_v1beta1_activity_instance = GoogleCloudPolicyanalyzerV1beta1Activity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicyanalyzerV1beta1Activity.to_json())

# convert the object into a dict
google_cloud_policyanalyzer_v1beta1_activity_dict = google_cloud_policyanalyzer_v1beta1_activity_instance.to_dict()
# create an instance of GoogleCloudPolicyanalyzerV1beta1Activity from a dict
google_cloud_policyanalyzer_v1beta1_activity_from_dict = GoogleCloudPolicyanalyzerV1beta1Activity.from_dict(google_cloud_policyanalyzer_v1beta1_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


