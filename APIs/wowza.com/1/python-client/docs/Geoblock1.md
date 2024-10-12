# Geoblock1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries** | **List[str]** | Required when &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;allow&lt;/strong&gt; or &lt;strong&gt;deny&lt;/strong&gt;. The locations affected by the geo-blocking. Enter a comma-separated list (an array) of two-letter ISO 3166-1 country codes. For a list, see &lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_3166-1&#39; target&#x3D;&#39;_blank&#39;&gt;ISO 3166-1&lt;/a&gt; on wikipedia. | [optional] 
**type** | **str** | The type of geo-blocking to apply. The value &lt;strong&gt;allow&lt;/strong&gt; permits viewing only in the locations specified by the &lt;em&gt;countries&lt;/em&gt; parameter. The value &lt;strong&gt;deny&lt;/strong&gt; prohibits viewing in the locations specified by the &lt;em&gt;countries&lt;/em&gt; parameter. The value &lt;strong&gt;disabled&lt;/strong&gt; (the default) permits viewing everywhere. | 
**whitelist** | **List[str]** | Whitelisted addresses can be viewed even if they&#39;re within a geo-blocked location. Enter a comma-separated list (an array) of IP addresses that always allow streaming. | [optional] 

## Example

```python
from openapi_client.models.geoblock1 import Geoblock1

# TODO update the JSON string below
json = "{}"
# create an instance of Geoblock1 from a JSON string
geoblock1_instance = Geoblock1.from_json(json)
# print the JSON string representation of the object
print(Geoblock1.to_json())

# convert the object into a dict
geoblock1_dict = geoblock1_instance.to_dict()
# create an instance of Geoblock1 from a dict
geoblock1_from_dict = Geoblock1.from_dict(geoblock1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


