# BGPCommunity

Contains bgp community information offered in Service Community resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**community_name** | **str** | The name of the bgp community. e.g. Skype. | [optional] 
**community_prefixes** | **List[str]** | The prefixes that the bgp community contains. | [optional] 
**community_value** | **str** | The value of the bgp community. For more information: https://docs.microsoft.com/en-us/azure/expressroute/expressroute-routing. | [optional] 
**is_authorized_to_use** | **bool** | Customer is authorized to use bgp community or not. | [optional] 
**service_group** | **str** | The service group of the bgp community contains. | [optional] 
**service_supported_region** | **str** | The region which the service support. e.g. For O365, region is Global. | [optional] 

## Example

```python
from openapi_client.models.bgp_community import BGPCommunity

# TODO update the JSON string below
json = "{}"
# create an instance of BGPCommunity from a JSON string
bgp_community_instance = BGPCommunity.from_json(json)
# print the JSON string representation of the object
print(BGPCommunity.to_json())

# convert the object into a dict
bgp_community_dict = bgp_community_instance.to_dict()
# create an instance of BGPCommunity from a dict
bgp_community_from_dict = BGPCommunity.from_dict(bgp_community_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


