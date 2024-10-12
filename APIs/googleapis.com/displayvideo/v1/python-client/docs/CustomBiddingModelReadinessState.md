# CustomBiddingModelReadinessState

The custom bidding algorithm model readiness state for a single shared advertiser.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | The unique ID of the relevant advertiser. | [optional] 
**readiness_state** | **str** | The readiness state of custom bidding model. | [optional] 

## Example

```python
from openapi_client.models.custom_bidding_model_readiness_state import CustomBiddingModelReadinessState

# TODO update the JSON string below
json = "{}"
# create an instance of CustomBiddingModelReadinessState from a JSON string
custom_bidding_model_readiness_state_instance = CustomBiddingModelReadinessState.from_json(json)
# print the JSON string representation of the object
print(CustomBiddingModelReadinessState.to_json())

# convert the object into a dict
custom_bidding_model_readiness_state_dict = custom_bidding_model_readiness_state_instance.to_dict()
# create an instance of CustomBiddingModelReadinessState from a dict
custom_bidding_model_readiness_state_from_dict = CustomBiddingModelReadinessState.from_dict(custom_bidding_model_readiness_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


