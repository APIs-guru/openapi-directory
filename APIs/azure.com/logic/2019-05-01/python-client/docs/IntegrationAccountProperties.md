# IntegrationAccountProperties

The integration account properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_service_environment** | [**IntegrationServiceEnvironment**](IntegrationServiceEnvironment.md) |  | [optional] 
**state** | [**WorkflowState**](WorkflowState.md) |  | [optional] 

## Example

```python
from openapi_client.models.integration_account_properties import IntegrationAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountProperties from a JSON string
integration_account_properties_instance = IntegrationAccountProperties.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountProperties.to_json())

# convert the object into a dict
integration_account_properties_dict = integration_account_properties_instance.to_dict()
# create an instance of IntegrationAccountProperties from a dict
integration_account_properties_from_dict = IntegrationAccountProperties.from_dict(integration_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


