# ReconciliationData26

Reconciliation information that will be associated to the transfer and will appear in the reconciliation reporting for the partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field** | [**List[CustomField27]**](CustomField27.md) | Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. | [optional] 

## Example

```python
from openapi_client.models.reconciliation_data26 import ReconciliationData26

# TODO update the JSON string below
json = "{}"
# create an instance of ReconciliationData26 from a JSON string
reconciliation_data26_instance = ReconciliationData26.from_json(json)
# print the JSON string representation of the object
print(ReconciliationData26.to_json())

# convert the object into a dict
reconciliation_data26_dict = reconciliation_data26_instance.to_dict()
# create an instance of ReconciliationData26 from a dict
reconciliation_data26_from_dict = ReconciliationData26.from_dict(reconciliation_data26_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


