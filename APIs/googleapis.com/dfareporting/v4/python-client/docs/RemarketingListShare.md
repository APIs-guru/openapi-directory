# RemarketingListShare

Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#remarketingListShare\&quot;. | [optional] 
**remarketing_list_id** | **str** | Remarketing list ID. This is a read-only, auto-generated field. | [optional] 
**shared_account_ids** | **List[str]** | Accounts that the remarketing list is shared with. | [optional] 
**shared_advertiser_ids** | **List[str]** | Advertisers that the remarketing list is shared with. | [optional] 

## Example

```python
from openapi_client.models.remarketing_list_share import RemarketingListShare

# TODO update the JSON string below
json = "{}"
# create an instance of RemarketingListShare from a JSON string
remarketing_list_share_instance = RemarketingListShare.from_json(json)
# print the JSON string representation of the object
print(RemarketingListShare.to_json())

# convert the object into a dict
remarketing_list_share_dict = remarketing_list_share_instance.to_dict()
# create an instance of RemarketingListShare from a dict
remarketing_list_share_from_dict = RemarketingListShare.from_dict(remarketing_list_share_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


