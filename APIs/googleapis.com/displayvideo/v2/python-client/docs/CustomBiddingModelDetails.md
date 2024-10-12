# CustomBiddingModelDetails

The details of a custom bidding algorithm model for a single shared advertiser.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | The unique ID of the relevant advertiser. | [optional] 
**readiness_state** | **str** | The readiness state of custom bidding model. | [optional] 
**suspension_state** | **str** | Output only. The suspension state of custom bidding model. | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_bidding_model_details import CustomBiddingModelDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CustomBiddingModelDetails from a JSON string
custom_bidding_model_details_instance = CustomBiddingModelDetails.from_json(json)
# print the JSON string representation of the object
print(CustomBiddingModelDetails.to_json())

# convert the object into a dict
custom_bidding_model_details_dict = custom_bidding_model_details_instance.to_dict()
# create an instance of CustomBiddingModelDetails from a dict
custom_bidding_model_details_from_dict = CustomBiddingModelDetails.from_dict(custom_bidding_model_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


