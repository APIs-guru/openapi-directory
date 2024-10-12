# SubExchangeTargetingOptionDetails

Represents a targetable sub-exchange. This will be populated in the sub_exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the sub-exchange. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sub_exchange_targeting_option_details import SubExchangeTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SubExchangeTargetingOptionDetails from a JSON string
sub_exchange_targeting_option_details_instance = SubExchangeTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(SubExchangeTargetingOptionDetails.to_json())

# convert the object into a dict
sub_exchange_targeting_option_details_dict = sub_exchange_targeting_option_details_instance.to_dict()
# create an instance of SubExchangeTargetingOptionDetails from a dict
sub_exchange_targeting_option_details_from_dict = SubExchangeTargetingOptionDetails.from_dict(sub_exchange_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


