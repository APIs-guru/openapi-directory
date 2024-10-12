# ListingSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description_text_template** | **str** |  | [optional] 
**description_title** | **str** |  | [optional] 
**features_text_template** | **str** |  | [optional] 
**features_title** | **str** |  | [optional] 
**install_button_label** | **str** |  | [optional] 
**name_postfix** | **str** |  | [optional] 
**naming** | **str** |  | [optional] 
**native_integration_link** | **str** |  | [optional] 
**pricing_disabled** | **bool** |  | [optional] 
**pricing_text_template** | **str** |  | [optional] 
**pricing_title** | **str** |  | [optional] 
**sidebar_position** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.listing_settings import ListingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ListingSettings from a JSON string
listing_settings_instance = ListingSettings.from_json(json)
# print the JSON string representation of the object
print(ListingSettings.to_json())

# convert the object into a dict
listing_settings_dict = listing_settings_instance.to_dict()
# create an instance of ListingSettings from a dict
listing_settings_from_dict = ListingSettings.from_dict(listing_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


