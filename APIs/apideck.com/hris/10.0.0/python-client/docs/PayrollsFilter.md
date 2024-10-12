# PayrollsFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **str** | Return payrolls whose pay period is before the end date | [optional] 
**start_date** | **str** | Return payrolls whose pay period is after the start date | [optional] 

## Example

```python
from openapi_client.models.payrolls_filter import PayrollsFilter

# TODO update the JSON string below
json = "{}"
# create an instance of PayrollsFilter from a JSON string
payrolls_filter_instance = PayrollsFilter.from_json(json)
# print the JSON string representation of the object
print(PayrollsFilter.to_json())

# convert the object into a dict
payrolls_filter_dict = payrolls_filter_instance.to_dict()
# create an instance of PayrollsFilter from a dict
payrolls_filter_from_dict = PayrollsFilter.from_dict(payrolls_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


