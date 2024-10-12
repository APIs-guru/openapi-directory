# GuestConfigurationNavigation

Guest configuration is an artifact that encapsulates DSC configuration and its dependencies. The artifact is a zip file containing DSC configuration (as MOF) and dependent resources and other dependencies like modules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_parameter** | [**ConfigurationParameterList**](ConfigurationParameterList.md) |  | [optional] 
**kind** | **str** | Kind of the guest configuration. For example:DSC | [optional] 
**name** | **str** | Name of the guest configuration. | [optional] [readonly] 
**type** | **str** | Type of the guest configuration. | [optional] [readonly] 

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


