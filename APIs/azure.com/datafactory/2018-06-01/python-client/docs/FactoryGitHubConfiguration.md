# FactoryGitHubConfiguration

Factory's GitHub repo information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_name** | **str** | GitHub Enterprise host name. For example: https://github.mydomain.com | [optional] 

## Example

```python
from openapi_client.models.factory_git_hub_configuration import FactoryGitHubConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of FactoryGitHubConfiguration from a JSON string
factory_git_hub_configuration_instance = FactoryGitHubConfiguration.from_json(json)
# print the JSON string representation of the object
print(FactoryGitHubConfiguration.to_json())

# convert the object into a dict
factory_git_hub_configuration_dict = factory_git_hub_configuration_instance.to_dict()
# create an instance of FactoryGitHubConfiguration from a dict
factory_git_hub_configuration_from_dict = FactoryGitHubConfiguration.from_dict(factory_git_hub_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


