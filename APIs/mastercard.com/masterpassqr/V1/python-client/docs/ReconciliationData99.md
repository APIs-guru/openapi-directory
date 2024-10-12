# ReconciliationData99

Reconciliation information that will be associated to the transfer and will appear in the reconciliation reporting for the partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field** | [**List[CustomField100]**](CustomField100.md) | Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup. | [optional] 

## Example

```python
from openapi_client.models.reconciliation_data99 import ReconciliationData99

# TODO update the JSON string below
json = "{}"
# create an instance of ReconciliationData99 from a JSON string
reconciliation_data99_instance = ReconciliationData99.from_json(json)
# print the JSON string representation of the object
print(ReconciliationData99.to_json())

# convert the object into a dict
reconciliation_data99_dict = reconciliation_data99_instance.to_dict()
# create an instance of ReconciliationData99 from a dict
reconciliation_data99_from_dict = ReconciliationData99.from_dict(reconciliation_data99_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


