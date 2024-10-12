# Transcoder5


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | The state of the transcoder. | [optional] 
**transcoding_uptime_id** | **str** | &lt;strong&gt;The &lt;em&gt;transcoding_uptime_id&lt;/em&gt; parameter is deprecated and is replaced by &lt;em&gt;uptime_id&lt;/em&gt;.&lt;/strong&gt; The unique identifier associated with a specific uptime period of a transcoder. | [optional] 

## Example

```python
from openapi_client.models.transcoder5 import Transcoder5

# TODO update the JSON string below
json = "{}"
# create an instance of Transcoder5 from a JSON string
transcoder5_instance = Transcoder5.from_json(json)
# print the JSON string representation of the object
print(Transcoder5.to_json())

# convert the object into a dict
transcoder5_dict = transcoder5_instance.to_dict()
# create an instance of Transcoder5 from a dict
transcoder5_from_dict = Transcoder5.from_dict(transcoder5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


