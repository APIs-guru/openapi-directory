# UpdateAccountRequestBodyAllowedIpRangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_end** | **str** |  | [optional] 
**ip_start** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.update_account_request_body_allowed_ip_ranges_inner import UpdateAccountRequestBodyAllowedIpRangesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAccountRequestBodyAllowedIpRangesInner from a JSON string
update_account_request_body_allowed_ip_ranges_inner_instance = UpdateAccountRequestBodyAllowedIpRangesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateAccountRequestBodyAllowedIpRangesInner.to_json())

# convert the object into a dict
update_account_request_body_allowed_ip_ranges_inner_dict = update_account_request_body_allowed_ip_ranges_inner_instance.to_dict()
# create an instance of UpdateAccountRequestBodyAllowedIpRangesInner from a dict
update_account_request_body_allowed_ip_ranges_inner_from_dict = UpdateAccountRequestBodyAllowedIpRangesInner.from_dict(update_account_request_body_allowed_ip_ranges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


