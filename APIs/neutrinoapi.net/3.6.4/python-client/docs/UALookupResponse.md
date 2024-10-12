# UALookupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**browser_engine** | **str** | If the client is a web browser which underlying browser engine does it use | 
**browser_release** | **str** | If the client is a web browser which year was this browser version released | 
**device_brand** | **str** | The device brand / manufacturer | 
**device_height_px** | **float** | The device display height in CSS &#39;px&#39; | 
**device_model** | **str** | The device model | 
**device_model_code** | **str** | The device model code | 
**device_pixel_ratio** | **float** | The device display pixel ratio (the ratio of the resolution in physical pixels to the resolution in CSS pixels) | 
**device_ppi** | **float** | The device display PPI (pixels per inch) | 
**device_price** | **float** | The average device price on release in USD | 
**device_release** | **str** | The year when this device model was released | 
**device_resolution** | **str** | The device display resolution in physical pixels (e.g. 720x1280) | 
**device_width_px** | **float** | The device display width in CSS &#39;px&#39; | 
**is_mobile** | **bool** | Is this a mobile device (e.g. a phone or tablet) | 
**is_webview** | **bool** | Is this a WebView / embedded software client | 
**name** | **str** | The client software name | 
**os** | **str** | The full operating system name | 
**os_family** | **str** | The operating system family. The major OS families are: Android, Windows, macOS, iOS, Linux | 
**os_version** | **str** | The operating system full version | 
**os_version_major** | **str** | The operating system major version | 
**type** | **str** | The user agent type, possible values are: &lt;br&gt; &lt;ul&gt; &lt;li&gt;desktop&lt;/li&gt; &lt;li&gt;phone&lt;/li&gt; &lt;li&gt;tablet&lt;/li&gt; &lt;li&gt;wearable&lt;/li&gt; &lt;li&gt;tv&lt;/li&gt; &lt;li&gt;console&lt;/li&gt; &lt;li&gt;email&lt;/li&gt; &lt;li&gt;library&lt;/li&gt; &lt;li&gt;robot&lt;/li&gt; &lt;li&gt;unknown&lt;/li&gt; &lt;/ul&gt; | 
**ua** | **str** | The user agent string | 
**version** | **str** | The client software full version | 
**version_major** | **str** | The client software major version | 

## Example

```python
from openapi_client.models.ua_lookup_response import UALookupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UALookupResponse from a JSON string
ua_lookup_response_instance = UALookupResponse.from_json(json)
# print the JSON string representation of the object
print(UALookupResponse.to_json())

# convert the object into a dict
ua_lookup_response_dict = ua_lookup_response_instance.to_dict()
# create an instance of UALookupResponse from a dict
ua_lookup_response_from_dict = UALookupResponse.from_dict(ua_lookup_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


