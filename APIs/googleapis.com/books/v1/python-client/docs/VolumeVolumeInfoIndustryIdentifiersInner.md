# VolumeVolumeInfoIndustryIdentifiersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **str** | Industry specific volume identifier. | [optional] 
**type** | **str** | Identifier type. Possible values are ISBN_10, ISBN_13, ISSN and OTHER. | [optional] 

## Example

```python
from openapi_client.models.volume_volume_info_industry_identifiers_inner import VolumeVolumeInfoIndustryIdentifiersInner

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeVolumeInfoIndustryIdentifiersInner from a JSON string
volume_volume_info_industry_identifiers_inner_instance = VolumeVolumeInfoIndustryIdentifiersInner.from_json(json)
# print the JSON string representation of the object
print(VolumeVolumeInfoIndustryIdentifiersInner.to_json())

# convert the object into a dict
volume_volume_info_industry_identifiers_inner_dict = volume_volume_info_industry_identifiers_inner_instance.to_dict()
# create an instance of VolumeVolumeInfoIndustryIdentifiersInner from a dict
volume_volume_info_industry_identifiers_inner_from_dict = VolumeVolumeInfoIndustryIdentifiersInner.from_dict(volume_volume_info_industry_identifiers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


