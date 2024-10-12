# GoogleCloudSecuritycenterV2AttackExposure

An attack exposure contains the results of an attack path simulation run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attack_exposure_result** | **str** | The resource name of the attack path simulation result that contains the details regarding this attack exposure score. Example: organizations/123/simulations/456/attackExposureResults/789 | [optional] 
**exposed_high_value_resources_count** | **int** | The number of high value resources that are exposed as a result of this finding. | [optional] 
**exposed_low_value_resources_count** | **int** | The number of high value resources that are exposed as a result of this finding. | [optional] 
**exposed_medium_value_resources_count** | **int** | The number of medium value resources that are exposed as a result of this finding. | [optional] 
**latest_calculation_time** | **str** | The most recent time the attack exposure was updated on this finding. | [optional] 
**score** | **float** | A number between 0 (inclusive) and infinity that represents how important this finding is to remediate. The higher the score, the more important it is to remediate. | [optional] 
**state** | **str** | Output only. What state this AttackExposure is in. This captures whether or not an attack exposure has been calculated or not. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_attack_exposure import GoogleCloudSecuritycenterV2AttackExposure

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2AttackExposure from a JSON string
google_cloud_securitycenter_v2_attack_exposure_instance = GoogleCloudSecuritycenterV2AttackExposure.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2AttackExposure.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_attack_exposure_dict = google_cloud_securitycenter_v2_attack_exposure_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2AttackExposure from a dict
google_cloud_securitycenter_v2_attack_exposure_from_dict = GoogleCloudSecuritycenterV2AttackExposure.from_dict(google_cloud_securitycenter_v2_attack_exposure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


