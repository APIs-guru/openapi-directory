# ReturnPolicyOnlinePolicy

The available policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **str** | The number of days items can be returned after delivery, where one day is defined to be 24 hours after the delivery timestamp. Required for &#x60;numberOfDaysAfterDelivery&#x60; returns. | [optional] 
**type** | **str** | Policy type. | [optional] 

## Example

```python
from openapi_client.models.return_policy_online_policy import ReturnPolicyOnlinePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnPolicyOnlinePolicy from a JSON string
return_policy_online_policy_instance = ReturnPolicyOnlinePolicy.from_json(json)
# print the JSON string representation of the object
print(ReturnPolicyOnlinePolicy.to_json())

# convert the object into a dict
return_policy_online_policy_dict = return_policy_online_policy_instance.to_dict()
# create an instance of ReturnPolicyOnlinePolicy from a dict
return_policy_online_policy_from_dict = ReturnPolicyOnlinePolicy.from_dict(return_policy_online_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


