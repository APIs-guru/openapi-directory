# AdvertiserGroup

Groups advertisers together so that reports can be generated for the entire group at once.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this advertiser group. This is a read-only field that can be left blank. | [optional] 
**id** | **str** | ID of this advertiser group. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#advertiserGroup\&quot;. | [optional] 
**name** | **str** | Name of this advertiser group. This is a required field and must be less than 256 characters long and unique among advertiser groups of the same account. | [optional] 

## Example

```python
from openapi_client.models.advertiser_group import AdvertiserGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AdvertiserGroup from a JSON string
advertiser_group_instance = AdvertiserGroup.from_json(json)
# print the JSON string representation of the object
print(AdvertiserGroup.to_json())

# convert the object into a dict
advertiser_group_dict = advertiser_group_instance.to_dict()
# create an instance of AdvertiserGroup from a dict
advertiser_group_from_dict = AdvertiserGroup.from_dict(advertiser_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


