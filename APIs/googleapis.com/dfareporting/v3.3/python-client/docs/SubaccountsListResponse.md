# SubaccountsListResponse

Subaccount List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#subaccountsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 
**subaccounts** | [**List[Subaccount]**](Subaccount.md) | Subaccount collection. | [optional] 

## Example

```python
from openapi_client.models.subaccounts_list_response import SubaccountsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubaccountsListResponse from a JSON string
subaccounts_list_response_instance = SubaccountsListResponse.from_json(json)
# print the JSON string representation of the object
print(SubaccountsListResponse.to_json())

# convert the object into a dict
subaccounts_list_response_dict = subaccounts_list_response_instance.to_dict()
# create an instance of SubaccountsListResponse from a dict
subaccounts_list_response_from_dict = SubaccountsListResponse.from_dict(subaccounts_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


