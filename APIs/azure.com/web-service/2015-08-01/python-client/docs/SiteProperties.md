# SiteProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_settings** | [**List[NameValuePair]**](NameValuePair.md) |  | [optional] 
**metadata** | [**List[NameValuePair]**](NameValuePair.md) |  | [optional] 
**properties** | [**List[NameValuePair]**](NameValuePair.md) |  | [optional] 

## Example

```python
from openapi_client.models.site_properties import SiteProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SiteProperties from a JSON string
site_properties_instance = SiteProperties.from_json(json)
# print the JSON string representation of the object
print(SiteProperties.to_json())

# convert the object into a dict
site_properties_dict = site_properties_instance.to_dict()
# create an instance of SiteProperties from a dict
site_properties_from_dict = SiteProperties.from_dict(site_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


