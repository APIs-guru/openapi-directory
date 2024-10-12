# GetBillResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Bill**](Bill.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_bill_response import GetBillResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetBillResponse from a JSON string
get_bill_response_instance = GetBillResponse.from_json(json)
# print the JSON string representation of the object
print(GetBillResponse.to_json())

# convert the object into a dict
get_bill_response_dict = get_bill_response_instance.to_dict()
# create an instance of GetBillResponse from a dict
get_bill_response_from_dict = GetBillResponse.from_dict(get_bill_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


