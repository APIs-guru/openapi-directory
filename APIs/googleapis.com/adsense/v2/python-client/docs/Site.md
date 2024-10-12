# Site

Representation of a Site.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_ads_enabled** | **bool** | Whether auto ads is turned on for the site. | [optional] 
**domain** | **str** | Domain (or subdomain) of the site, e.g. \&quot;example.com\&quot; or \&quot;www.example.com\&quot;. This is used in the &#x60;OWNED_SITE_DOMAIN_NAME&#x60; reporting dimension. | [optional] 
**name** | **str** | Output only. Resource name of a site. Format: accounts/{account}/sites/{site} | [optional] [readonly] 
**reporting_dimension_id** | **str** | Output only. Unique ID of the site as used in the &#x60;OWNED_SITE_ID&#x60; reporting dimension. | [optional] [readonly] 
**state** | **str** | Output only. State of a site. | [optional] [readonly] 

## Example

```python
from openapi_client.models.site import Site

# TODO update the JSON string below
json = "{}"
# create an instance of Site from a JSON string
site_instance = Site.from_json(json)
# print the JSON string representation of the object
print(Site.to_json())

# convert the object into a dict
site_dict = site_instance.to_dict()
# create an instance of Site from a dict
site_from_dict = Site.from_dict(site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


