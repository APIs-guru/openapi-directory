# BgpServiceCommunityPropertiesFormat

Properties of Service Community.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bgp_communities** | [**List[BGPCommunity]**](BGPCommunity.md) | Get a list of bgp communities. | [optional] 
**service_name** | **str** | The name of the bgp community. e.g. Skype. | [optional] 

## Example

```python
from openapi_client.models.bgp_service_community_properties_format import BgpServiceCommunityPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of BgpServiceCommunityPropertiesFormat from a JSON string
bgp_service_community_properties_format_instance = BgpServiceCommunityPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(BgpServiceCommunityPropertiesFormat.to_json())

# convert the object into a dict
bgp_service_community_properties_format_dict = bgp_service_community_properties_format_instance.to_dict()
# create an instance of BgpServiceCommunityPropertiesFormat from a dict
bgp_service_community_properties_format_from_dict = BgpServiceCommunityPropertiesFormat.from_dict(bgp_service_community_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


