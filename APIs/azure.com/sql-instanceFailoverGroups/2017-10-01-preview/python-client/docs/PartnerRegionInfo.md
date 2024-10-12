# PartnerRegionInfo

Partner region information for the failover group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Geo location of the partner managed instances. | [optional] 
**replication_role** | **str** | Replication role of the partner managed instances. | [optional] [readonly] 

## Example

```python
from openapi_client.models.partner_region_info import PartnerRegionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerRegionInfo from a JSON string
partner_region_info_instance = PartnerRegionInfo.from_json(json)
# print the JSON string representation of the object
print(PartnerRegionInfo.to_json())

# convert the object into a dict
partner_region_info_dict = partner_region_info_instance.to_dict()
# create an instance of PartnerRegionInfo from a dict
partner_region_info_from_dict = PartnerRegionInfo.from_dict(partner_region_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


