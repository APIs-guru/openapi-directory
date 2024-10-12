# ReconciliationData11

Reconciliation information that will be associated to the transfer and will appear in the reconciliation reporting for the partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field** | [**List[CustomField12]**](CustomField12.md) | Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. | [optional] 

## Example

```python
from openapi_client.models.reconciliation_data11 import ReconciliationData11

# TODO update the JSON string below
json = "{}"
# create an instance of ReconciliationData11 from a JSON string
reconciliation_data11_instance = ReconciliationData11.from_json(json)
# print the JSON string representation of the object
print(ReconciliationData11.to_json())

# convert the object into a dict
reconciliation_data11_dict = reconciliation_data11_instance.to_dict()
# create an instance of ReconciliationData11 from a dict
reconciliation_data11_from_dict = ReconciliationData11.from_dict(reconciliation_data11_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


