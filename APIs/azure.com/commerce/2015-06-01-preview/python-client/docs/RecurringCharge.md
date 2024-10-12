# RecurringCharge

Indicates a recurring charge is present for this offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recurring_charge** | **int** | The amount of recurring charge as per the offer term. | [optional] 

## Example

```python
from openapi_client.models.recurring_charge import RecurringCharge

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringCharge from a JSON string
recurring_charge_instance = RecurringCharge.from_json(json)
# print the JSON string representation of the object
print(RecurringCharge.to_json())

# convert the object into a dict
recurring_charge_dict = recurring_charge_instance.to_dict()
# create an instance of RecurringCharge from a dict
recurring_charge_from_dict = RecurringCharge.from_dict(recurring_charge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


