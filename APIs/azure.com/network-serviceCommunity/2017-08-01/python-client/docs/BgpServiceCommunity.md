# BgpServiceCommunity

Service Community Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BgpServiceCommunityPropertiesFormat**](BgpServiceCommunityPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bgp_service_community import BgpServiceCommunity

# TODO update the JSON string below
json = "{}"
# create an instance of BgpServiceCommunity from a JSON string
bgp_service_community_instance = BgpServiceCommunity.from_json(json)
# print the JSON string representation of the object
print(BgpServiceCommunity.to_json())

# convert the object into a dict
bgp_service_community_dict = bgp_service_community_instance.to_dict()
# create an instance of BgpServiceCommunity from a dict
bgp_service_community_from_dict = BgpServiceCommunity.from_dict(bgp_service_community_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


