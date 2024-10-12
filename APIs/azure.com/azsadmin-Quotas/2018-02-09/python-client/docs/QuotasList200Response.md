# QuotasList200Response

List of Compute quotas

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[QuotasList200ResponseValueInner]**](QuotasList200ResponseValueInner.md) | List of Compute quotas | [optional] 

## Example

```python
from openapi_client.models.quotas_list200_response import QuotasList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of QuotasList200Response from a JSON string
quotas_list200_response_instance = QuotasList200Response.from_json(json)
# print the JSON string representation of the object
print(QuotasList200Response.to_json())

# convert the object into a dict
quotas_list200_response_dict = quotas_list200_response_instance.to_dict()
# create an instance of QuotasList200Response from a dict
quotas_list200_response_from_dict = QuotasList200Response.from_dict(quotas_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


