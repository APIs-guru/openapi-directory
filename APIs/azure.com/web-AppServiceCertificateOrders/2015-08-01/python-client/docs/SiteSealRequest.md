# SiteSealRequest

Site seal request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**light_theme** | **bool** | If &lt;code&gt;true&lt;/code&gt; use the light color theme for site seal; otherwise, use the default color theme. | [optional] 
**locale** | **str** | Locale of site seal. | [optional] 

## Example

```python
from openapi_client.models.site_seal_request import SiteSealRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SiteSealRequest from a JSON string
site_seal_request_instance = SiteSealRequest.from_json(json)
# print the JSON string representation of the object
print(SiteSealRequest.to_json())

# convert the object into a dict
site_seal_request_dict = site_seal_request_instance.to_dict()
# create an instance of SiteSealRequest from a dict
site_seal_request_from_dict = SiteSealRequest.from_dict(site_seal_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


