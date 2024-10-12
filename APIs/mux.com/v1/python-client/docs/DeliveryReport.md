# DeliveryReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_duration** | **float** | The duration of the asset in seconds. | [optional] 
**asset_id** | **str** | Unique identifier for the asset. | [optional] 
**asset_resolution_tier** | **str** | The resolution tier that the asset was ingested at, affecting billing for ingest &amp; storage | [optional] 
**asset_state** | **str** | The state of the asset. | [optional] 
**created_at** | **str** | Time at which the asset was created. Measured in seconds since the Unix epoch. | [optional] 
**deleted_at** | **str** | If exists, time at which the asset was deleted. Measured in seconds since the Unix epoch. | [optional] 
**delivered_seconds** | **float** | Total number of delivered seconds during this time window. | [optional] 
**delivered_seconds_by_resolution** | [**DeliveryReportDeliveredSecondsByResolution**](DeliveryReportDeliveredSecondsByResolution.md) |  | [optional] 
**live_stream_id** | **str** | Unique identifier for the live stream that created the asset. | [optional] 
**passthrough** | **str** | The &#x60;passthrough&#x60; value for the asset. | [optional] 

## Example

```python
from openapi_client.models.delivery_report import DeliveryReport

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryReport from a JSON string
delivery_report_instance = DeliveryReport.from_json(json)
# print the JSON string representation of the object
print(DeliveryReport.to_json())

# convert the object into a dict
delivery_report_dict = delivery_report_instance.to_dict()
# create an instance of DeliveryReport from a dict
delivery_report_from_dict = DeliveryReport.from_dict(delivery_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


