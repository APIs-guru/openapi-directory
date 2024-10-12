# NoPriceCountDetails

The reasons that contributed to the no price count and the total count for each reason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**live_pricing_config_issue_count** | **str** | The total number of missed participation due to live pricing not being triggered for any of the following reasons: * You didn&#39;t have live pricing configured for these searches. * You restricted Google from accessing the hotel itinerary in question. | [optional] 
**live_pricing_not_available_count** | **str** | The total number of missed participation due to live pricing being unavailable. Live pricing will not be triggered for certain default itineraries or UIs. In this scenario, partners will need a cached price to participate. | [optional] 
**live_pricing_not_triggered_count** | **str** | The total number of missed participation due to live pricing not being triggered for any of the following reasons: * You didn&#39;t set a bid. * You didn&#39;t have a valid landing page. * There weren&#39;t enough prices in the cache. | [optional] 
**live_pricing_other_reason_count** | **str** | The number of missed participations due to other issues with live pricing. | [optional] 
**live_pricing_technical_issue_count** | **str** | The total number of missed participation due to technical issues with live pricing for any of the following reasons: * You didn’t respond quickly enough and exceeded the response deadline (around 4000 milliseconds). * You returned an error. * Your response was malformed. | [optional] 

## Example

```python
from openapi_client.models.no_price_count_details import NoPriceCountDetails

# TODO update the JSON string below
json = "{}"
# create an instance of NoPriceCountDetails from a JSON string
no_price_count_details_instance = NoPriceCountDetails.from_json(json)
# print the JSON string representation of the object
print(NoPriceCountDetails.to_json())

# convert the object into a dict
no_price_count_details_dict = no_price_count_details_instance.to_dict()
# create an instance of NoPriceCountDetails from a dict
no_price_count_details_from_dict = NoPriceCountDetails.from_dict(no_price_count_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


