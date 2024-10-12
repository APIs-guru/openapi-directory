# RtbMetrics

Real-time bidding metrics. For what each metric means refer to [Report metrics](https://support.google.com/adxbuyer/answer/6115195#report-metrics)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_impressions7_days** | **str** | Ad impressions in last 7 days. | [optional] 
**bid_rate7_days** | **float** | Bid rate in last 7 days, calculated by (bids / bid requests). | [optional] 
**bid_requests7_days** | **str** | Bid requests in last 7 days. | [optional] 
**bids7_days** | **str** | Bids in last 7 days. | [optional] 
**filtered_bid_rate7_days** | **float** | Filtered bid rate in last 7 days, calculated by (filtered bids / bids). | [optional] 
**must_bid_rate_current_month** | **float** | Must bid rate for current month. | [optional] 

## Example

```python
from openapi_client.models.rtb_metrics import RtbMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of RtbMetrics from a JSON string
rtb_metrics_instance = RtbMetrics.from_json(json)
# print the JSON string representation of the object
print(RtbMetrics.to_json())

# convert the object into a dict
rtb_metrics_dict = rtb_metrics_instance.to_dict()
# create an instance of RtbMetrics from a dict
rtb_metrics_from_dict = RtbMetrics.from_dict(rtb_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


