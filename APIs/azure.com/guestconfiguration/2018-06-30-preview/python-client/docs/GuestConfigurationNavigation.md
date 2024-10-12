# GuestConfigurationNavigation

Guest configuration is an artifact that encapsulates DSC configuration and its dependencies. The artifact is a zip file containing DSC configuration (as MOF) and dependent resources and other dependencies like modules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_parameter** | [**List[ConfigurationParameter]**](ConfigurationParameter.md) | The configuration parameters for the guest configuration. | [optional] 
**configuration_setting** | [**ConfigurationSetting**](ConfigurationSetting.md) |  | [optional] 
**content_hash** | **str** | Combined hash of the guest configuration package and configuration parameters. | [optional] [readonly] 
**content_uri** | **str** | Uri of the storage where guest configuration package is uploaded. | [optional] [readonly] 
**kind** | **str** | Kind of the guest configuration. For example:DSC | [optional] 
**name** | **str** | Name of the guest configuration. | [optional] 
**version** | **str** | Version of the guest configuration. | [optional] 

## Example

```python
from openapi_client.models.guest_configuration_navigation import GuestConfigurationNavigation

# TODO update the JSON string below
json = "{}"
# create an instance of GuestConfigurationNavigation from a JSON string
guest_configuration_navigation_instance = GuestConfigurationNavigation.from_json(json)
# print the JSON string representation of the object
print(GuestConfigurationNavigation.to_json())

# convert the object into a dict
guest_configuration_navigation_dict = guest_configuration_navigation_instance.to_dict()
# create an instance of GuestConfigurationNavigation from a dict
guest_configuration_navigation_from_dict = GuestConfigurationNavigation.from_dict(guest_configuration_navigation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


