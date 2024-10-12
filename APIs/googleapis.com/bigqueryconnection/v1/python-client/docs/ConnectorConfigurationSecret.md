# ConnectorConfigurationSecret

Secret value parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plaintext** | **str** | Input only. Secret as plaintext. | [optional] 
**secret_type** | **str** | Output only. Indicates type of secret. Can be used to check type of stored secret value even if it&#39;s &#x60;INPUT_ONLY&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connector_configuration_secret import ConnectorConfigurationSecret

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorConfigurationSecret from a JSON string
connector_configuration_secret_instance = ConnectorConfigurationSecret.from_json(json)
# print the JSON string representation of the object
print(ConnectorConfigurationSecret.to_json())

# convert the object into a dict
connector_configuration_secret_dict = connector_configuration_secret_instance.to_dict()
# create an instance of ConnectorConfigurationSecret from a dict
connector_configuration_secret_from_dict = ConnectorConfigurationSecret.from_dict(connector_configuration_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


