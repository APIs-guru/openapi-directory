# PartnerInfo

Partner server information for the failover group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource identifier of the partner server. | 
**location** | **str** | Geo location of the partner server. | [optional] [readonly] 
**replication_role** | **str** | Replication role of the partner server. | [optional] [readonly] 

## Example

```python
from openapi_client.models.partner_info import PartnerInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerInfo from a JSON string
partner_info_instance = PartnerInfo.from_json(json)
# print the JSON string representation of the object
print(PartnerInfo.to_json())

# convert the object into a dict
partner_info_dict = partner_info_instance.to_dict()
# create an instance of PartnerInfo from a dict
partner_info_from_dict = PartnerInfo.from_dict(partner_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


