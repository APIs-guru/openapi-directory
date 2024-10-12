# WebPropertySummary

JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Web property ID of the form UA-XXXXX-YY. | [optional] 
**internal_web_property_id** | **str** | Internal ID for this web property. | [optional] 
**kind** | **str** | Resource type for Analytics WebPropertySummary. | [optional] [default to 'analytics#webPropertySummary']
**level** | **str** | Level for this web property. Possible values are STANDARD or PREMIUM. | [optional] 
**name** | **str** | Web property name. | [optional] 
**profiles** | [**List[ProfileSummary]**](ProfileSummary.md) | List of profiles under this web property. | [optional] 
**starred** | **bool** | Indicates whether this web property is starred or not. | [optional] 
**website_url** | **str** | Website url for this web property. | [optional] 

## Example

```python
from openapi_client.models.web_property_summary import WebPropertySummary

# TODO update the JSON string below
json = "{}"
# create an instance of WebPropertySummary from a JSON string
web_property_summary_instance = WebPropertySummary.from_json(json)
# print the JSON string representation of the object
print(WebPropertySummary.to_json())

# convert the object into a dict
web_property_summary_dict = web_property_summary_instance.to_dict()
# create an instance of WebPropertySummary from a dict
web_property_summary_from_dict = WebPropertySummary.from_dict(web_property_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


