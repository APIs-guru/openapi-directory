# Webproperty

JSON template for an Analytics web property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID to which this web property belongs. | [optional] 
**child_link** | [**WebpropertyChildLink**](WebpropertyChildLink.md) |  | [optional] 
**created** | **datetime** | Time this web property was created. | [optional] [readonly] 
**data_retention_reset_on_new_activity** | **bool** | Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period). Set to false to delete data associated with the user identifier automatically after the rentention period. This property cannot be set on insert. | [optional] 
**data_retention_ttl** | **str** | The length of time for which user and event data is retained. This property cannot be set on insert. | [optional] 
**default_profile_id** | **str** | Default view (profile) ID. | [optional] 
**id** | **str** | Web property ID of the form UA-XXXXX-YY. | [optional] 
**industry_vertical** | **str** | The industry vertical/category selected for this web property. | [optional] 
**internal_web_property_id** | **str** | Internal ID for this web property. | [optional] [readonly] 
**kind** | **str** | Resource type for Analytics WebProperty. | [optional] [readonly] [default to 'analytics#webproperty']
**level** | **str** | Level for this web property. Possible values are STANDARD or PREMIUM. | [optional] [readonly] 
**name** | **str** | Name of this web property. | [optional] 
**parent_link** | [**WebpropertyParentLink**](WebpropertyParentLink.md) |  | [optional] 
**permissions** | [**WebpropertyPermissions**](WebpropertyPermissions.md) |  | [optional] 
**profile_count** | **int** | View (Profile) count for this web property. | [optional] [readonly] 
**self_link** | **str** | Link for this web property. | [optional] [readonly] 
**starred** | **bool** | Indicates whether this web property is starred or not. | [optional] 
**updated** | **datetime** | Time this web property was last modified. | [optional] [readonly] 
**website_url** | **str** | Website url for this web property. | [optional] 

## Example

```python
from openapi_client.models.webproperty import Webproperty

# TODO update the JSON string below
json = "{}"
# create an instance of Webproperty from a JSON string
webproperty_instance = Webproperty.from_json(json)
# print the JSON string representation of the object
print(Webproperty.to_json())

# convert the object into a dict
webproperty_dict = webproperty_instance.to_dict()
# create an instance of Webproperty from a dict
webproperty_from_dict = Webproperty.from_dict(webproperty_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


