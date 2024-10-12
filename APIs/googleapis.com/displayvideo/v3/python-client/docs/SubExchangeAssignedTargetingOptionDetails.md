# SubExchangeAssignedTargetingOptionDetails

Details for assigned sub-exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targeting_option_id** | **str** | Required. The targeting_option_id of a TargetingOption of type &#x60;TARGETING_TYPE_SUB_EXCHANGE&#x60;. | [optional] 

## Example

```python
from openapi_client.models.sub_exchange_assigned_targeting_option_details import SubExchangeAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SubExchangeAssignedTargetingOptionDetails from a JSON string
sub_exchange_assigned_targeting_option_details_instance = SubExchangeAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(SubExchangeAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
sub_exchange_assigned_targeting_option_details_dict = sub_exchange_assigned_targeting_option_details_instance.to_dict()
# create an instance of SubExchangeAssignedTargetingOptionDetails from a dict
sub_exchange_assigned_targeting_option_details_from_dict = SubExchangeAssignedTargetingOptionDetails.from_dict(sub_exchange_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


