# CloudRunConfig

CloudRunConfig contains the Cloud Run runtime configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automatic_traffic_control** | **bool** | Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user&#39;s behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments. | [optional] 
**canary_revision_tags** | **List[str]** | Optional. A list of tags that are added to the canary revision while the canary phase is in progress. | [optional] 
**prior_revision_tags** | **List[str]** | Optional. A list of tags that are added to the prior revision while the canary phase is in progress. | [optional] 
**stable_revision_tags** | **List[str]** | Optional. A list of tags that are added to the final stable revision when the stable phase is applied. | [optional] 

## Example

```python
from openapi_client.models.cloud_run_config import CloudRunConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudRunConfig from a JSON string
cloud_run_config_instance = CloudRunConfig.from_json(json)
# print the JSON string representation of the object
print(CloudRunConfig.to_json())

# convert the object into a dict
cloud_run_config_dict = cloud_run_config_instance.to_dict()
# create an instance of CloudRunConfig from a dict
cloud_run_config_from_dict = CloudRunConfig.from_dict(cloud_run_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


