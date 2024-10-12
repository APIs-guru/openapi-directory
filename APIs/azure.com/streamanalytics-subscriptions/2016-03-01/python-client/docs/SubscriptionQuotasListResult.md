# SubscriptionQuotasListResult

Result of the GetQuotas operation. It contains a list of quotas for the subscription in a particular region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SubscriptionQuota]**](SubscriptionQuota.md) | List of quotas for the subscription in a particular region. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_quotas_list_result import SubscriptionQuotasListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionQuotasListResult from a JSON string
subscription_quotas_list_result_instance = SubscriptionQuotasListResult.from_json(json)
# print the JSON string representation of the object
print(SubscriptionQuotasListResult.to_json())

# convert the object into a dict
subscription_quotas_list_result_dict = subscription_quotas_list_result_instance.to_dict()
# create an instance of SubscriptionQuotasListResult from a dict
subscription_quotas_list_result_from_dict = SubscriptionQuotasListResult.from_dict(subscription_quotas_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


