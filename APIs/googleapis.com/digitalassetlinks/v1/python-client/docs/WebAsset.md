# WebAsset

Describes a web asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**site** | **str** | Web assets are identified by a URL that contains only the scheme, hostname and port parts. The format is http[s]://[:] Hostnames must be fully qualified: they must end in a single period (\&quot;&#x60;.&#x60;\&quot;). Only the schemes \&quot;http\&quot; and \&quot;https\&quot; are currently allowed. Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https. We call this limited URL the \&quot;site\&quot;. All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset. Example: the asset with the site &#x60;https://www.google.com&#x60; contains all these URLs: * &#x60;https://www.google.com/&#x60; * &#x60;https://www.google.com:443/&#x60; * &#x60;https://www.google.com/foo&#x60; * &#x60;https://www.google.com/foo?bar&#x60; * &#x60;https://www.google.com/foo#bar&#x60; * &#x60;https://user@password:www.google.com/&#x60; But it does not contain these URLs: * &#x60;http://www.google.com/&#x60; (wrong scheme) * &#x60;https://google.com/&#x60; (hostname does not match) * &#x60;https://www.google.com:444/&#x60; (port does not match) REQUIRED | [optional] 

## Example

```python
from openapi_client.models.web_asset import WebAsset

# TODO update the JSON string below
json = "{}"
# create an instance of WebAsset from a JSON string
web_asset_instance = WebAsset.from_json(json)
# print the JSON string representation of the object
print(WebAsset.to_json())

# convert the object into a dict
web_asset_dict = web_asset_instance.to_dict()
# create an instance of WebAsset from a dict
web_asset_from_dict = WebAsset.from_dict(web_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


