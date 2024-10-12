# ExchangeAssignedTargetingOptionDetails

Details for assigned exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchange** | **str** | Required. The enum value for the exchange. | [optional] 

## Example

```python
from openapi_client.models.exchange_assigned_targeting_option_details import ExchangeAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangeAssignedTargetingOptionDetails from a JSON string
exchange_assigned_targeting_option_details_instance = ExchangeAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ExchangeAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
exchange_assigned_targeting_option_details_dict = exchange_assigned_targeting_option_details_instance.to_dict()
# create an instance of ExchangeAssignedTargetingOptionDetails from a dict
exchange_assigned_targeting_option_details_from_dict = ExchangeAssignedTargetingOptionDetails.from_dict(exchange_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


