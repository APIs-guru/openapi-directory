# IntegrationServiceEnvironmentListResult

The list of integration service environments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[IntegrationServiceEnvironment]**](IntegrationServiceEnvironment.md) |  | [optional] 

## Example

```python
from openapi_client.models.integration_service_environment_list_result import IntegrationServiceEnvironmentListResult

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationServiceEnvironmentListResult from a JSON string
integration_service_environment_list_result_instance = IntegrationServiceEnvironmentListResult.from_json(json)
# print the JSON string representation of the object
print(IntegrationServiceEnvironmentListResult.to_json())

# convert the object into a dict
integration_service_environment_list_result_dict = integration_service_environment_list_result_instance.to_dict()
# create an instance of IntegrationServiceEnvironmentListResult from a dict
integration_service_environment_list_result_from_dict = IntegrationServiceEnvironmentListResult.from_dict(integration_service_environment_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


