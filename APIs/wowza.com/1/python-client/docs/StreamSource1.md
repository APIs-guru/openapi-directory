# StreamSource1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_ip_address** | **str** | If &lt;em&gt;location_method&lt;/em&gt; is &lt;strong&gt;ip_address&lt;/strong&gt;, specify the backup IP address of the source encoder. | [optional] 
**ip_address** | **str** | If &lt;em&gt;location_method&lt;/em&gt; is &lt;strong&gt;ip_address&lt;/strong&gt;, specify the primary IP address of the source encoder. | [optional] 
**location** | **str** | If &lt;em&gt;location_method&lt;/em&gt; is &lt;strong&gt;region&lt;/strong&gt;, specify a location as close as possible to the source encoder. | [optional] 
**location_method** | **str** | The method used to determine the location of the stream source, either by &lt;strong&gt;region&lt;/strong&gt; or based on the source encoder&#39;s &lt;strong&gt;ip_address&lt;/strong&gt;. | 
**name** | **str** | A descriptive name for the stream source. Maximum 255 characters. | 

## Example

```python
from openapi_client.models.stream_source1 import StreamSource1

# TODO update the JSON string below
json = "{}"
# create an instance of StreamSource1 from a JSON string
stream_source1_instance = StreamSource1.from_json(json)
# print the JSON string representation of the object
print(StreamSource1.to_json())

# convert the object into a dict
stream_source1_dict = stream_source1_instance.to_dict()
# create an instance of StreamSource1 from a dict
stream_source1_from_dict = StreamSource1.from_dict(stream_source1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


