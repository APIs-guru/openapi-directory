# YadifConfig

Yet Another Deinterlacing Filter Configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deinterlace_all_frames** | **bool** | Deinterlace all frames rather than just the frames identified as interlaced. The default is &#x60;false&#x60;. | [optional] 
**disable_spatial_interlacing** | **bool** | Disable spacial interlacing. The default is &#x60;false&#x60;. | [optional] 
**mode** | **str** | Specifies the deinterlacing mode to adopt. The default is &#x60;send_frame&#x60;. Supported values: - &#x60;send_frame&#x60;: Output one frame for each frame - &#x60;send_field&#x60;: Output one frame for each field | [optional] 
**parity** | **str** | The picture field parity assumed for the input interlaced video. The default is &#x60;auto&#x60;. Supported values: - &#x60;tff&#x60;: Assume the top field is first - &#x60;bff&#x60;: Assume the bottom field is first - &#x60;auto&#x60;: Enable automatic detection of field parity | [optional] 

## Example

```python
from openapi_client.models.yadif_config import YadifConfig

# TODO update the JSON string below
json = "{}"
# create an instance of YadifConfig from a JSON string
yadif_config_instance = YadifConfig.from_json(json)
# print the JSON string representation of the object
print(YadifConfig.to_json())

# convert the object into a dict
yadif_config_dict = yadif_config_instance.to_dict()
# create an instance of YadifConfig from a dict
yadif_config_from_dict = YadifConfig.from_dict(yadif_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


