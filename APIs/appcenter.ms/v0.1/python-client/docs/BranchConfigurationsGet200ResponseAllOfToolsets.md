# BranchConfigurationsGet200ResponseAllOfToolsets

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
from openapi_client.models.branch_configurations_get200_response_all_of_toolsets import BranchConfigurationsGet200ResponseAllOfToolsets

# TODO update the JSON string below
json = "{}"
# create an instance of BranchConfigurationsGet200ResponseAllOfToolsets from a JSON string
branch_configurations_get200_response_all_of_toolsets_instance = BranchConfigurationsGet200ResponseAllOfToolsets.from_json(json)
# print the JSON string representation of the object
print(BranchConfigurationsGet200ResponseAllOfToolsets.to_json())

# convert the object into a dict
branch_configurations_get200_response_all_of_toolsets_dict = branch_configurations_get200_response_all_of_toolsets_instance.to_dict()
# create an instance of BranchConfigurationsGet200ResponseAllOfToolsets from a dict
branch_configurations_get200_response_all_of_toolsets_from_dict = BranchConfigurationsGet200ResponseAllOfToolsets.from_dict(branch_configurations_get200_response_all_of_toolsets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


