# ShmMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_codec** | [**AudioCodecMetric**](AudioCodecMetric.md) |  | [optional] 
**bits_in_rate** | [**BitsInRateMetric**](BitsInRateMetric.md) |  | [optional] 
**bits_out_rate** | [**BitsOutRateMetric**](BitsOutRateMetric.md) |  | [optional] 
**bytes_in_rate** | [**BytesInRateMetric**](BytesInRateMetric.md) |  | [optional] 
**bytes_out_rate** | [**BytesOutRateMetric**](BytesOutRateMetric.md) |  | [optional] 
**configured_bytes_out_rate** | [**ConfiguredBytesOutRateMetric**](ConfiguredBytesOutRateMetric.md) |  | [optional] 
**connected** | [**ConnectedMetric**](ConnectedMetric.md) |  | [optional] 
**cpu** | [**CpuMetric**](CpuMetric.md) |  | [optional] 
**frame_rate** | [**FrameRateMetric**](FrameRateMetric.md) |  | [optional] 
**frame_size** | [**FrameSizeMetric**](FrameSizeMetric.md) |  | [optional] 
**gpu_decoder_usage** | [**GpuDecoderUsageMetric**](GpuDecoderUsageMetric.md) |  | [optional] 
**gpu_driver_version** | [**GpuDriverVersionMetric**](GpuDriverVersionMetric.md) |  | [optional] 
**gpu_encoder_usage** | [**GpuEncoderUsageMetric**](GpuEncoderUsageMetric.md) |  | [optional] 
**gpu_memory_usage** | [**GpuMemoryUsageMetric**](GpuMemoryUsageMetric.md) |  | [optional] 
**gpu_usage** | [**GpuUsageMetric**](GpuUsageMetric.md) |  | [optional] 
**height** | [**HeightMetric**](HeightMetric.md) |  | [optional] 
**keyframe_interval** | [**KeyframeIntervalMetric**](KeyframeIntervalMetric.md) |  | [optional] 
**stream_target_status_outputidx_streamtargetidx** | [**StreamTargetStatusOUTPUTIDXSTREAMTARGETIDXMetric**](StreamTargetStatusOUTPUTIDXSTREAMTARGETIDXMetric.md) |  | [optional] 
**unique_views** | [**UniqueViewsMetric**](UniqueViewsMetric.md) |  | [optional] 
**video_codec** | [**VideoCodecMetric**](VideoCodecMetric.md) |  | [optional] 
**width** | [**WidthMetric**](WidthMetric.md) |  | [optional] 

## Example

```python
from openapi_client.models.shm_metrics import ShmMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of ShmMetrics from a JSON string
shm_metrics_instance = ShmMetrics.from_json(json)
# print the JSON string representation of the object
print(ShmMetrics.to_json())

# convert the object into a dict
shm_metrics_dict = shm_metrics_instance.to_dict()
# create an instance of ShmMetrics from a dict
shm_metrics_from_dict = ShmMetrics.from_dict(shm_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


