# VPCSCConfig

The Artifact Registry VPC SC config that apply to a Project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the project&#39;s VPC SC Config. Always of the form: projects/{projectID}/locations/{location}/vpcscConfig In update request: never set In response: always set | [optional] 
**vpcsc_policy** | **str** | The project per location VPC SC policy that defines the VPC SC behavior for the Remote Repository (Allow/Deny). | [optional] 

## Example

```python
from openapi_client.models.vpcsc_config import VPCSCConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VPCSCConfig from a JSON string
vpcsc_config_instance = VPCSCConfig.from_json(json)
# print the JSON string representation of the object
print(VPCSCConfig.to_json())

# convert the object into a dict
vpcsc_config_dict = vpcsc_config_instance.to_dict()
# create an instance of VPCSCConfig from a dict
vpcsc_config_from_dict = VPCSCConfig.from_dict(vpcsc_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


