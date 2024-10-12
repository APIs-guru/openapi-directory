# MonetaryCredit

Indicates that this is a monetary credit offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit** | **float** | The amount of credit provided under the terms of the given offer level. | [optional] 
**excluded_meter_ids** | **List[str]** | An array of meter ids that are excluded from the given offer terms. | [optional] 

## Example

```python
from openapi_client.models.monetary_credit import MonetaryCredit

# TODO update the JSON string below
json = "{}"
# create an instance of MonetaryCredit from a JSON string
monetary_credit_instance = MonetaryCredit.from_json(json)
# print the JSON string representation of the object
print(MonetaryCredit.to_json())

# convert the object into a dict
monetary_credit_dict = monetary_credit_instance.to_dict()
# create an instance of MonetaryCredit from a dict
monetary_credit_from_dict = MonetaryCredit.from_dict(monetary_credit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


