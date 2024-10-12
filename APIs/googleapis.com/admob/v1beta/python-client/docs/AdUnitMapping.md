# AdUnitMapping

Settings to map an AdMob ad unit to a 3rd party ad unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_unit_configurations** | **Dict[str, str]** | Settings for the specified ad unit to make an ad request to 3rd party ad network. Key-value pairs with values set by the user for the keys requested by the ad network. Please see https://support.google.com/admob/answer/3245073 for details on how to configure the network settings. | [optional] 
**adapter_id** | **str** | The ID of mediation ad source adapter used by this ad unit mapping. The adapter determines the information needed in the ad_network_settings. | [optional] 
**display_name** | **str** | Optional. The display name of this ad unit mapping instance. | [optional] 
**name** | **str** | Resource name of this ad unit mapping. Format is: accounts/{publisher_id}/adUnits/{ad_unit_id_fragment}/adUnitMappings/{ad_unit_mapping_id} Example: accounts/pub-1234567890123456/adUnits/0123456789/adUnitMappings/987654321 | [optional] 
**state** | **str** | Output only. The status of this ad unit mapping. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ad_unit_mapping import AdUnitMapping

# TODO update the JSON string below
json = "{}"
# create an instance of AdUnitMapping from a JSON string
ad_unit_mapping_instance = AdUnitMapping.from_json(json)
# print the JSON string representation of the object
print(AdUnitMapping.to_json())

# convert the object into a dict
ad_unit_mapping_dict = ad_unit_mapping_instance.to_dict()
# create an instance of AdUnitMapping from a dict
ad_unit_mapping_from_dict = AdUnitMapping.from_dict(ad_unit_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


