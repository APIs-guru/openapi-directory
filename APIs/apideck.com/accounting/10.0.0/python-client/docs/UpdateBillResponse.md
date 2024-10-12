# UpdateBillResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UnifiedId**](UnifiedId.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.update_bill_response import UpdateBillResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBillResponse from a JSON string
update_bill_response_instance = UpdateBillResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateBillResponse.to_json())

# convert the object into a dict
update_bill_response_dict = update_bill_response_instance.to_dict()
# create an instance of UpdateBillResponse from a dict
update_bill_response_from_dict = UpdateBillResponse.from_dict(update_bill_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


