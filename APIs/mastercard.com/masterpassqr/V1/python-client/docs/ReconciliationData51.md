# ReconciliationData51

Reconciliation information that will be associated to the transfer and will appear in the reconciliation reporting for the partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field** | [**List[CustomField52]**](CustomField52.md) | Contains custom field names and values to appear in the reconciliation report. This can be a list of multiple name/value pairs. The names provided must match the configured in the partner setup. | [optional] 

## Example

```python
from openapi_client.models.reconciliation_data51 import ReconciliationData51

# TODO update the JSON string below
json = "{}"
# create an instance of ReconciliationData51 from a JSON string
reconciliation_data51_instance = ReconciliationData51.from_json(json)
# print the JSON string representation of the object
print(ReconciliationData51.to_json())

# convert the object into a dict
reconciliation_data51_dict = reconciliation_data51_instance.to_dict()
# create an instance of ReconciliationData51 from a dict
reconciliation_data51_from_dict = ReconciliationData51.from_dict(reconciliation_data51_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


