# IntegrationAccountSession

The integration account session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IntegrationAccountSessionProperties**](IntegrationAccountSessionProperties.md) |  | 
**id** | **str** | The resource id. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] 
**name** | **str** | Gets the resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | Gets the resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.integration_account_session import IntegrationAccountSession

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountSession from a JSON string
integration_account_session_instance = IntegrationAccountSession.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountSession.to_json())

# convert the object into a dict
integration_account_session_dict = integration_account_session_instance.to_dict()
# create an instance of IntegrationAccountSession from a dict
integration_account_session_from_dict = IntegrationAccountSession.from_dict(integration_account_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


