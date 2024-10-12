# VPCSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project** | **str** | The resource name of the GCP Project to be used for VPC SC policy check. VPC security settings on this project will be honored for Cloud Search APIs after project_name has been updated through CustomerService. Format: projects/{project_id} | [optional] 

## Example

```python
from openapi_client.models.vpc_settings import VPCSettings

# TODO update the JSON string below
json = "{}"
# create an instance of VPCSettings from a JSON string
vpc_settings_instance = VPCSettings.from_json(json)
# print the JSON string representation of the object
print(VPCSettings.to_json())

# convert the object into a dict
vpc_settings_dict = vpc_settings_instance.to_dict()
# create an instance of VPCSettings from a dict
vpc_settings_from_dict = VPCSettings.from_dict(vpc_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


