# TheNameOfTheRendition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries** | [**List[CountryObject]**](CountryObject.md) |  | [optional] 
**name** | **str** | The name of the rendition. | [optional] 
**percentage_viewers** | **int** | Total percentage of viewers (&lt;strong&gt;100&lt;/strong&gt;). | [optional] 
**percentage_viewing_time** | **int** | The percentage of total viewing time that the protocol or rendition was viewed. Always &lt;strong&gt;100&lt;/strong&gt; for &lt;em&gt;stream_target&lt;/em&gt;. | [optional] 
**protocols** | [**List[ProtocolObject]**](ProtocolObject.md) |  | [optional] 
**seconds_avg_viewing_time** | **int** | The average length of time, in seconds, that viewers played the stream at the target. | [optional] 
**seconds_total_viewing_time** | **int** | The total length of time, in seconds, that all viewers played the stream at the target. &lt;em&gt;seconds_total_viewing_time&lt;/em&gt; may be longer than the duration of the stream. | [optional] 
**total_unique_viewers** | **int** | The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once. | [optional] 

## Example

```python
from openapi_client.models.the_name_of_the_rendition import TheNameOfTheRendition

# TODO update the JSON string below
json = "{}"
# create an instance of TheNameOfTheRendition from a JSON string
the_name_of_the_rendition_instance = TheNameOfTheRendition.from_json(json)
# print the JSON string representation of the object
print(TheNameOfTheRendition.to_json())

# convert the object into a dict
the_name_of_the_rendition_dict = the_name_of_the_rendition_instance.to_dict()
# create an instance of TheNameOfTheRendition from a dict
the_name_of_the_rendition_from_dict = TheNameOfTheRendition.from_dict(the_name_of_the_rendition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


