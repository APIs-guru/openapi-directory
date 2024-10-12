# PaymentsFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice_number** | **str** | Invoice number for payments to filter on | [optional] 

## Example

```python
from openapi_client.models.payments_filter import PaymentsFilter

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentsFilter from a JSON string
payments_filter_instance = PaymentsFilter.from_json(json)
# print the JSON string representation of the object
print(PaymentsFilter.to_json())

# convert the object into a dict
payments_filter_dict = payments_filter_instance.to_dict()
# create an instance of PaymentsFilter from a dict
payments_filter_from_dict = PaymentsFilter.from_dict(payments_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


