# GetTransactions200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_next** | **bool** |  | [optional] 
**has_previous** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**ok** | **bool** |  | [optional] 
**result** | **List[object]** |  | [optional] 

## Example

```python
from openapi_client.models.get_transactions200_response import GetTransactions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetTransactions200Response from a JSON string
get_transactions200_response_instance = GetTransactions200Response.from_json(json)
# print the JSON string representation of the object
print(GetTransactions200Response.to_json())

# convert the object into a dict
get_transactions200_response_dict = get_transactions200_response_instance.to_dict()
# create an instance of GetTransactions200Response from a dict
get_transactions200_response_from_dict = GetTransactions200Response.from_dict(get_transactions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


