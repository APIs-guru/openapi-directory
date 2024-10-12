# ExchangeTargetingOptionDetails

Represents a targetable exchange. This will be populated in the exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchange** | **str** | Output only. The type of exchange. | [optional] [readonly] 

## Example

```python
from openapi_client.models.exchange_targeting_option_details import ExchangeTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangeTargetingOptionDetails from a JSON string
exchange_targeting_option_details_instance = ExchangeTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ExchangeTargetingOptionDetails.to_json())

# convert the object into a dict
exchange_targeting_option_details_dict = exchange_targeting_option_details_instance.to_dict()
# create an instance of ExchangeTargetingOptionDetails from a dict
exchange_targeting_option_details_from_dict = ExchangeTargetingOptionDetails.from_dict(exchange_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


