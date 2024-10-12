# AccountStatusStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **str** | Number of active offers. | [optional] 
**disapproved** | **str** | Number of disapproved offers. | [optional] 
**expiring** | **str** | Number of expiring offers. | [optional] 
**pending** | **str** | Number of pending offers. | [optional] 

## Example

```python
from openapi_client.models.account_status_statistics import AccountStatusStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of AccountStatusStatistics from a JSON string
account_status_statistics_instance = AccountStatusStatistics.from_json(json)
# print the JSON string representation of the object
print(AccountStatusStatistics.to_json())

# convert the object into a dict
account_status_statistics_dict = account_status_statistics_instance.to_dict()
# create an instance of AccountStatusStatistics from a dict
account_status_statistics_from_dict = AccountStatusStatistics.from_dict(account_status_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


