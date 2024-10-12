# DepositMethodsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DepositMethod]**](DepositMethod.md) |  | [optional] 
**links** | [**ResponseLinks**](ResponseLinks.md) |  | [optional] 
**meta** | [**ResponseMeta**](ResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.deposit_methods_response import DepositMethodsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DepositMethodsResponse from a JSON string
deposit_methods_response_instance = DepositMethodsResponse.from_json(json)
# print the JSON string representation of the object
print(DepositMethodsResponse.to_json())

# convert the object into a dict
deposit_methods_response_dict = deposit_methods_response_instance.to_dict()
# create an instance of DepositMethodsResponse from a dict
deposit_methods_response_from_dict = DepositMethodsResponse.from_dict(deposit_methods_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


