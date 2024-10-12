# QuotasList200ResponseValueInner

Holds Compute quota information used to control resource allocation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**QuotasList200ResponseValueInnerProperties**](QuotasList200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.quotas_list200_response_value_inner import QuotasList200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of QuotasList200ResponseValueInner from a JSON string
quotas_list200_response_value_inner_instance = QuotasList200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(QuotasList200ResponseValueInner.to_json())

# convert the object into a dict
quotas_list200_response_value_inner_dict = quotas_list200_response_value_inner_instance.to_dict()
# create an instance of QuotasList200ResponseValueInner from a dict
quotas_list200_response_value_inner_from_dict = QuotasList200ResponseValueInner.from_dict(quotas_list200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


