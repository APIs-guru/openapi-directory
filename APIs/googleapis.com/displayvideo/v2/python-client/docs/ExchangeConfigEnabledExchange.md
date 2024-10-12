# ExchangeConfigEnabledExchange

An enabled exchange in the partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchange** | **str** | The enabled exchange. | [optional] 
**google_ad_manager_agency_id** | **str** | Output only. Agency ID of Google Ad Manager. The field is only relevant when Google Ad Manager is the enabled exchange. | [optional] [readonly] 
**google_ad_manager_buyer_network_id** | **str** | Output only. Network ID of Google Ad Manager. The field is only relevant when Google Ad Manager is the enabled exchange. | [optional] [readonly] 
**seat_id** | **str** | Output only. Seat ID of the enabled exchange. | [optional] [readonly] 

## Example

```python
from openapi_client.models.exchange_config_enabled_exchange import ExchangeConfigEnabledExchange

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangeConfigEnabledExchange from a JSON string
exchange_config_enabled_exchange_instance = ExchangeConfigEnabledExchange.from_json(json)
# print the JSON string representation of the object
print(ExchangeConfigEnabledExchange.to_json())

# convert the object into a dict
exchange_config_enabled_exchange_dict = exchange_config_enabled_exchange_instance.to_dict()
# create an instance of ExchangeConfigEnabledExchange from a dict
exchange_config_enabled_exchange_from_dict = ExchangeConfigEnabledExchange.from_dict(exchange_config_enabled_exchange_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


