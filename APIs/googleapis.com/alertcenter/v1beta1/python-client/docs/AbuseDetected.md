# AbuseDetected

A generic alert for abusive user activity occurring with a customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_details** | [**EntityList**](EntityList.md) |  | [optional] 
**product** | **str** | Product that the abuse is originating from. | [optional] 
**sub_alert_id** | **str** | Unique identifier of each sub alert that is onboarded. | [optional] 
**variation_type** | **str** | Variation of AbuseDetected alerts. The variation_type determines the texts displayed the alert details. This differs from sub_alert_id because each sub alert can have multiple variation_types, representing different stages of the alert. | [optional] 

## Example

```python
from openapi_client.models.abuse_detected import AbuseDetected

# TODO update the JSON string below
json = "{}"
# create an instance of AbuseDetected from a JSON string
abuse_detected_instance = AbuseDetected.from_json(json)
# print the JSON string representation of the object
print(AbuseDetected.to_json())

# convert the object into a dict
abuse_detected_dict = abuse_detected_instance.to_dict()
# create an instance of AbuseDetected from a dict
abuse_detected_from_dict = AbuseDetected.from_dict(abuse_detected_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


