# DfpSettings

Google Ad Manager Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dfp_network_code** | **str** | Ad Manager network code for this directory site. | [optional] 
**dfp_network_name** | **str** | Ad Manager network name for this directory site. | [optional] 
**programmatic_placement_accepted** | **bool** | Whether this directory site accepts programmatic placements. | [optional] 
**pub_paid_placement_accepted** | **bool** | Whether this directory site accepts publisher-paid tags. | [optional] 
**publisher_portal_only** | **bool** | Whether this directory site is available only via Publisher Portal. | [optional] 

## Example

```python
from openapi_client.models.dfp_settings import DfpSettings

# TODO update the JSON string below
json = "{}"
# create an instance of DfpSettings from a JSON string
dfp_settings_instance = DfpSettings.from_json(json)
# print the JSON string representation of the object
print(DfpSettings.to_json())

# convert the object into a dict
dfp_settings_dict = dfp_settings_instance.to_dict()
# create an instance of DfpSettings from a dict
dfp_settings_from_dict = DfpSettings.from_dict(dfp_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


