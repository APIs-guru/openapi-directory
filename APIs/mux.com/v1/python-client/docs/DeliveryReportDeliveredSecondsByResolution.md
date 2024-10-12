# DeliveryReportDeliveredSecondsByResolution

Seconds delivered broken into resolution tiers. Each tier will only be displayed if there was content delivered in the tier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tier_1080p** | **float** | Total number of delivered seconds during this time window that had a resolution larger than the 720p tier but less than or equal to the 1440p tier (over 921,600 and &lt;&#x3D; 2,073,600 pixels total). | [optional] 
**tier_1440p** | **float** | Total number of delivered seconds during this time window that had a resolution larger than the 1080p tier but less than or equal to the 2160p tier (over 2,073,600 and &lt;&#x3D; 4,194,304 pixels total). | [optional] 
**tier_2160p** | **float** | Total number of delivered seconds during this time window that had a resolution larger than the 1440p tier (over 4,194,304 pixels total). | [optional] 
**tier_720p** | **float** | Total number of delivered seconds during this time window that had a resolution within the 720p tier (up to 921,600 pixels total, based on typical 1280x720). | [optional] 
**tier_audio_only** | **float** | Total number of delivered seconds during this time window that had a resolution of audio only. | [optional] 

## Example

```python
from openapi_client.models.delivery_report_delivered_seconds_by_resolution import DeliveryReportDeliveredSecondsByResolution

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryReportDeliveredSecondsByResolution from a JSON string
delivery_report_delivered_seconds_by_resolution_instance = DeliveryReportDeliveredSecondsByResolution.from_json(json)
# print the JSON string representation of the object
print(DeliveryReportDeliveredSecondsByResolution.to_json())

# convert the object into a dict
delivery_report_delivered_seconds_by_resolution_dict = delivery_report_delivered_seconds_by_resolution_instance.to_dict()
# create an instance of DeliveryReportDeliveredSecondsByResolution from a dict
delivery_report_delivered_seconds_by_resolution_from_dict = DeliveryReportDeliveredSecondsByResolution.from_dict(delivery_report_delivered_seconds_by_resolution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


