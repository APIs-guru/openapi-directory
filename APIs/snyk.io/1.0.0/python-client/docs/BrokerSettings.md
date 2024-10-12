# BrokerSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.broker_settings import BrokerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of BrokerSettings from a JSON string
broker_settings_instance = BrokerSettings.from_json(json)
# print the JSON string representation of the object
print(BrokerSettings.to_json())

# convert the object into a dict
broker_settings_dict = broker_settings_instance.to_dict()
# create an instance of BrokerSettings from a dict
broker_settings_from_dict = BrokerSettings.from_dict(broker_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


