# ReconciliationData126

Contains information that needs to appear in the reconciliation report for this transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field** | [**List[CustomField127]**](CustomField127.md) | Contains custom field names and values to appear in the reconciliation report for this transfer. This could be a list of multiple values. These should match with the information during onboarding. | [optional] 

## Example

```python
from openapi_client.models.reconciliation_data126 import ReconciliationData126

# TODO update the JSON string below
json = "{}"
# create an instance of ReconciliationData126 from a JSON string
reconciliation_data126_instance = ReconciliationData126.from_json(json)
# print the JSON string representation of the object
print(ReconciliationData126.to_json())

# convert the object into a dict
reconciliation_data126_dict = reconciliation_data126_instance.to_dict()
# create an instance of ReconciliationData126 from a dict
reconciliation_data126_from_dict = ReconciliationData126.from_dict(reconciliation_data126_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


