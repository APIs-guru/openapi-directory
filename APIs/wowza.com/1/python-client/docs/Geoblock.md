# Geoblock


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries** | **List[str]** | Required when &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;allow&lt;/strong&gt; or &lt;strong&gt;deny&lt;/strong&gt;. The locations affected by the geo-blocking. Enter a comma-separated list (an array) of two-letter ISO 3166-1 country codes. For a list, see &lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_3166-1&#39; target&#x3D;&#39;_blank&#39;&gt;ISO 3166-1&lt;/a&gt; on wikipedia. | [optional] 
**created_at** | **datetime** | The date and time that the geo-blocking rendition was created. | [optional] 
**state** | **str** | The state of the geo-blocking. | [optional] 
**stream_target_id** | **str** | The unique alphanumeric string that identifies the stream target. | [optional] 
**type** | **str** | The type of geo-blocking to apply. The value &lt;strong&gt;allow&lt;/strong&gt; permits viewing only in the locations specified by the &lt;em&gt;countries&lt;/em&gt; parameter. The value &lt;strong&gt;deny&lt;/strong&gt; prohibits viewing in the locations specified by the &lt;em&gt;countries&lt;/em&gt; parameter. The value &lt;strong&gt;disabled&lt;/strong&gt; (the default) permits viewing everywhere. | [optional] 
**updated_at** | **datetime** | The date and time that the geo-blocking rendition was updated. | [optional] 
**whitelist** | **List[str]** | Whitelisted addresses can be viewed even if they&#39;re within a geo-blocked location. Enter a comma-separated list (an array) of IP addresses that always allow streaming. | [optional] 

## Example

```python
from openapi_client.models.geoblock import Geoblock

# TODO update the JSON string below
json = "{}"
# create an instance of Geoblock from a JSON string
geoblock_instance = Geoblock.from_json(json)
# print the JSON string representation of the object
print(Geoblock.to_json())

# convert the object into a dict
geoblock_dict = geoblock_instance.to_dict()
# create an instance of Geoblock from a dict
geoblock_from_dict = Geoblock.from_dict(geoblock_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


