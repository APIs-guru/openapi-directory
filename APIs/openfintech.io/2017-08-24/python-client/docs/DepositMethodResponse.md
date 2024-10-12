# DepositMethodResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**DepositMethod**](DepositMethod.md) |  | [optional] 

## Example

```python
from openapi_client.models.deposit_method_response import DepositMethodResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DepositMethodResponse from a JSON string
deposit_method_response_instance = DepositMethodResponse.from_json(json)
# print the JSON string representation of the object
print(DepositMethodResponse.to_json())

# convert the object into a dict
deposit_method_response_dict = deposit_method_response_instance.to_dict()
# create an instance of DepositMethodResponse from a dict
deposit_method_response_from_dict = DepositMethodResponse.from_dict(deposit_method_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


