# BillingDestination

Configuration of a specific billing destination (Currently only support bill against consumer project).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics** | **List[str]** | Names of the metrics to report to this billing destination. Each name must be defined in Service.metrics section. | [optional] 
**monitored_resource** | **str** | The monitored resource type. The type must be defined in Service.monitored_resources section. | [optional] 

## Example

```python
from openapi_client.models.billing_destination import BillingDestination

# TODO update the JSON string below
json = "{}"
# create an instance of BillingDestination from a JSON string
billing_destination_instance = BillingDestination.from_json(json)
# print the JSON string representation of the object
print(BillingDestination.to_json())

# convert the object into a dict
billing_destination_dict = billing_destination_instance.to_dict()
# create an instance of BillingDestination from a dict
billing_destination_from_dict = BillingDestination.from_dict(billing_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


