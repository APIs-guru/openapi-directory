# IntegrationAccountSessionFilter

The integration account session filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed_time** | **datetime** | The changed time of integration account sessions. | 

## Example

```python
from openapi_client.models.integration_account_session_filter import IntegrationAccountSessionFilter

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountSessionFilter from a JSON string
integration_account_session_filter_instance = IntegrationAccountSessionFilter.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountSessionFilter.to_json())

# convert the object into a dict
integration_account_session_filter_dict = integration_account_session_filter_instance.to_dict()
# create an instance of IntegrationAccountSessionFilter from a dict
integration_account_session_filter_from_dict = IntegrationAccountSessionFilter.from_dict(integration_account_session_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


