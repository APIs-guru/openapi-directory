# JobConfig

Job configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_breaks** | [**List[AdBreak]**](AdBreak.md) | List of ad breaks. Specifies where to insert ad break tags in the output manifests. | [optional] 
**edit_list** | [**List[EditAtom]**](EditAtom.md) | List of &#x60;Edit atom&#x60;s. Defines the ultimate timeline of the resulting file or manifest. | [optional] 
**elementary_streams** | [**List[ElementaryStream]**](ElementaryStream.md) | List of elementary streams. | [optional] 
**inputs** | [**List[Input]**](Input.md) | List of input assets stored in Cloud Storage. | [optional] 
**manifests** | [**List[Manifest]**](Manifest.md) | List of output manifests. | [optional] 
**mux_streams** | [**List[MuxStream]**](MuxStream.md) | List of multiplexing settings for output streams. | [optional] 
**output** | [**Output**](Output.md) |  | [optional] 
**overlays** | [**List[Overlay]**](Overlay.md) | List of overlays on the output video, in descending Z-order. | [optional] 
**pubsub_destination** | [**PubsubDestination**](PubsubDestination.md) |  | [optional] 
**sprite_sheets** | [**List[SpriteSheet]**](SpriteSheet.md) | List of output sprite sheets. | [optional] 

## Example

```python
from openapi_client.models.job_config import JobConfig

# TODO update the JSON string below
json = "{}"
# create an instance of JobConfig from a JSON string
job_config_instance = JobConfig.from_json(json)
# print the JSON string representation of the object
print(JobConfig.to_json())

# convert the object into a dict
job_config_dict = job_config_instance.to_dict()
# create an instance of JobConfig from a dict
job_config_from_dict = JobConfig.from_dict(job_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


