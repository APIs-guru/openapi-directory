# Quota


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_limit** | **int** | Total number of bytes that can be transferred per month. | [optional] 
**bandwidth_used** | **int** | Number of bytes transferred this month. | [optional] 
**disk_limit** | **int** | Amount of disk space that the account has available to it. This may be increased by upgrading to a larger plan. | [optional] 
**disk_used** | **int** | Amount of disk space currently in use. | [optional] 
**notice_enabled** | **bool** | Should a quota warning be sent to the account owner when a threshold level of space utilization is reached? | [optional] 
**notice_threshold** | **int** | Treshold that triggers a quota notification. This represents the \&quot;percent full\&quot; your account must be before the quota notification is generated. | [optional] 
**transactions_limit** | **int** | Total number of transactions allowed in a 24-hour period. | [optional] 
**transactions_notice_enabled** | **bool** | Whether an email should be sent to the account owner up to once per day if transaction usage exceeds &#x60;transactionsNoticeThreshold&#x60; value. | [optional] 
**transactions_notice_threshold** | **int** | Percent of daily transactions limit that will trigger an email if activity exceeds it. | [optional] 

## Example

```python
from openapi_client.models.quota import Quota

# TODO update the JSON string below
json = "{}"
# create an instance of Quota from a JSON string
quota_instance = Quota.from_json(json)
# print the JSON string representation of the object
print(Quota.to_json())

# convert the object into a dict
quota_dict = quota_instance.to_dict()
# create an instance of Quota from a dict
quota_from_dict = Quota.from_dict(quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


