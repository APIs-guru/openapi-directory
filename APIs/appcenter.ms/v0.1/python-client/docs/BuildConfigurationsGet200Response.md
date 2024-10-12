# BuildConfigurationsGet200Response

The build configuration in Azure pipeline YAML format

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**yaml** | **str** | Azure Pipelines YAML file | [optional] 

## Example

```python
from openapi_client.models.build_configurations_get200_response import BuildConfigurationsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BuildConfigurationsGet200Response from a JSON string
build_configurations_get200_response_instance = BuildConfigurationsGet200Response.from_json(json)
# print the JSON string representation of the object
print(BuildConfigurationsGet200Response.to_json())

# convert the object into a dict
build_configurations_get200_response_dict = build_configurations_get200_response_instance.to_dict()
# create an instance of BuildConfigurationsGet200Response from a dict
build_configurations_get200_response_from_dict = BuildConfigurationsGet200Response.from_dict(build_configurations_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


