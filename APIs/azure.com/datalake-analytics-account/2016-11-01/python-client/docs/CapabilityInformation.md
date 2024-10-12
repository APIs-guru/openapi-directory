# CapabilityInformation

Subscription-level properties and limits for Data Lake Analytics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_count** | **int** | The current number of accounts under this subscription. | [optional] [readonly] 
**max_account_count** | **int** | The maximum supported number of accounts under this subscription. | [optional] [readonly] 
**migration_state** | **bool** | The Boolean value of true or false to indicate the maintenance state. | [optional] [readonly] 
**state** | **str** | The subscription state. | [optional] [readonly] 
**subscription_id** | **str** | The subscription credentials that uniquely identifies the subscription. | [optional] [readonly] 

## Example

```python
from openapi_client.models.capability_information import CapabilityInformation

# TODO update the JSON string below
json = "{}"
# create an instance of CapabilityInformation from a JSON string
capability_information_instance = CapabilityInformation.from_json(json)
# print the JSON string representation of the object
print(CapabilityInformation.to_json())

# convert the object into a dict
capability_information_dict = capability_information_instance.to_dict()
# create an instance of CapabilityInformation from a dict
capability_information_from_dict = CapabilityInformation.from_dict(capability_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


