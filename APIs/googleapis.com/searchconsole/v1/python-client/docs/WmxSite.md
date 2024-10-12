# WmxSite

Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permission_level** | **str** | The user&#39;s permission level for the site. | [optional] 
**site_url** | **str** | The URL of the site. | [optional] 

## Example

```python
from openapi_client.models.wmx_site import WmxSite

# TODO update the JSON string below
json = "{}"
# create an instance of WmxSite from a JSON string
wmx_site_instance = WmxSite.from_json(json)
# print the JSON string representation of the object
print(WmxSite.to_json())

# convert the object into a dict
wmx_site_dict = wmx_site_instance.to_dict()
# create an instance of WmxSite from a dict
wmx_site_from_dict = WmxSite.from_dict(wmx_site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


