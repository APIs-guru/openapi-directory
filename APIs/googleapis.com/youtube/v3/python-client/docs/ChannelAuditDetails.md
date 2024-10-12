# ChannelAuditDetails

The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**community_guidelines_good_standing** | **bool** | Whether or not the channel respects the community guidelines. | [optional] 
**content_id_claims_good_standing** | **bool** | Whether or not the channel has any unresolved claims. | [optional] 
**copyright_strikes_good_standing** | **bool** | Whether or not the channel has any copyright strikes. | [optional] 

## Example

```python
from openapi_client.models.channel_audit_details import ChannelAuditDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelAuditDetails from a JSON string
channel_audit_details_instance = ChannelAuditDetails.from_json(json)
# print the JSON string representation of the object
print(ChannelAuditDetails.to_json())

# convert the object into a dict
channel_audit_details_dict = channel_audit_details_instance.to_dict()
# create an instance of ChannelAuditDetails from a dict
channel_audit_details_from_dict = ChannelAuditDetails.from_dict(channel_audit_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


