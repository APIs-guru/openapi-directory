# AddressResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hits** | [**List[AddressResponseResultHitsInner]**](AddressResponseResultHitsInner.md) | List of matching addresses  | 
**limit** | **int** |  | [default to 10]
**page** | **int** |  | [default to 0]
**total** | **int** |  | 

## Example

```python
from openapi_client.models.address_response_result import AddressResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of AddressResponseResult from a JSON string
address_response_result_instance = AddressResponseResult.from_json(json)
# print the JSON string representation of the object
print(AddressResponseResult.to_json())

# convert the object into a dict
address_response_result_dict = address_response_result_instance.to_dict()
# create an instance of AddressResponseResult from a dict
address_response_result_from_dict = AddressResponseResult.from_dict(address_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


