# BranchConfigurationToolsets

The branch build configuration for each toolset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android** | [**BranchConfigurationsGet200ResponseAllOfToolsetsAndroid**](BranchConfigurationsGet200ResponseAllOfToolsetsAndroid.md) |  | [optional] 
**javascript** | [**BranchConfigurationsGet200ResponseAllOfToolsetsJavascript**](BranchConfigurationsGet200ResponseAllOfToolsetsJavascript.md) |  | [optional] 
**xamarin** | [**BranchConfigurationsGet200ResponseAllOfToolsetsXamarin**](BranchConfigurationsGet200ResponseAllOfToolsetsXamarin.md) |  | [optional] 
**xcode** | [**BranchConfigurationsGet200ResponseAllOfToolsetsXcode**](BranchConfigurationsGet200ResponseAllOfToolsetsXcode.md) |  | [optional] 

## Example

```python
from openapi_client.models.branch_configuration_toolsets import BranchConfigurationToolsets

# TODO update the JSON string below
json = "{}"
# create an instance of BranchConfigurationToolsets from a JSON string
branch_configuration_toolsets_instance = BranchConfigurationToolsets.from_json(json)
# print the JSON string representation of the object
print(BranchConfigurationToolsets.to_json())

# convert the object into a dict
branch_configuration_toolsets_dict = branch_configuration_toolsets_instance.to_dict()
# create an instance of BranchConfigurationToolsets from a dict
branch_configuration_toolsets_from_dict = BranchConfigurationToolsets.from_dict(branch_configuration_toolsets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


