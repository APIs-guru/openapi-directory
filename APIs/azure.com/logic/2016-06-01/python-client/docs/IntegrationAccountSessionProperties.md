# IntegrationAccountSessionProperties

The integration account session properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed_time** | **datetime** | The changed time. | [optional] [readonly] 
**content** | **object** |  | [optional] 
**created_time** | **datetime** | The created time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.integration_account_session_properties import IntegrationAccountSessionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountSessionProperties from a JSON string
integration_account_session_properties_instance = IntegrationAccountSessionProperties.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountSessionProperties.to_json())

# convert the object into a dict
integration_account_session_properties_dict = integration_account_session_properties_instance.to_dict()
# create an instance of IntegrationAccountSessionProperties from a dict
integration_account_session_properties_from_dict = IntegrationAccountSessionProperties.from_dict(integration_account_session_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


