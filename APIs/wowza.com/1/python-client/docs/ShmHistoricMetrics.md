# ShmHistoricMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_codec** | [**AudioCodecMetric**](AudioCodecMetric.md) |  | [optional] 
**bits_in_rate** | [**BitsInRateMetric**](BitsInRateMetric.md) |  | [optional] 
**bits_out_rate** | [**BitsOutRateMetric**](BitsOutRateMetric.md) |  | [optional] 
**cpu_idle** | [**CpuIdleMetric**](CpuIdleMetric.md) |  | [optional] 
**created_at** | **str** | The date and time that the stream health record was created. | [optional] 
**frame_rate** | [**FrameRateMetric**](FrameRateMetric.md) |  | [optional] 
**height** | [**HeightMetric**](HeightMetric.md) |  | [optional] 
**keyframe_interval** | [**KeyframeIntervalMetric**](KeyframeIntervalMetric.md) |  | [optional] 
**video_codec** | [**VideoCodecMetric**](VideoCodecMetric.md) |  | [optional] 
**width** | [**WidthMetric**](WidthMetric.md) |  | [optional] 

## Example

```python
from openapi_client.models.shm_historic_metrics import ShmHistoricMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of ShmHistoricMetrics from a JSON string
shm_historic_metrics_instance = ShmHistoricMetrics.from_json(json)
# print the JSON string representation of the object
print(ShmHistoricMetrics.to_json())

# convert the object into a dict
shm_historic_metrics_dict = shm_historic_metrics_instance.to_dict()
# create an instance of ShmHistoricMetrics from a dict
shm_historic_metrics_from_dict = ShmHistoricMetrics.from_dict(shm_historic_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


