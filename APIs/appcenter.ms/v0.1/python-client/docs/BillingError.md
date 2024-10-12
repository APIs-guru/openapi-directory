# BillingError

Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**BillingAggregatedInformationGetByAppDefaultResponseError**](BillingAggregatedInformationGetByAppDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.billing_error import BillingError

# TODO update the JSON string below
json = "{}"
# create an instance of BillingError from a JSON string
billing_error_instance = BillingError.from_json(json)
# print the JSON string representation of the object
print(BillingError.to_json())

# convert the object into a dict
billing_error_dict = billing_error_instance.to_dict()
# create an instance of BillingError from a dict
billing_error_from_dict = BillingError.from_dict(billing_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


