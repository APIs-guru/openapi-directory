# SavingsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**Status**](Status.md) |  | [optional] 
**user_savings** | [**UserSavings**](UserSavings.md) |  | [optional] 

## Example

```python
from openapi_client.models.savings_response import SavingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SavingsResponse from a JSON string
savings_response_instance = SavingsResponse.from_json(json)
# print the JSON string representation of the object
print(SavingsResponse.to_json())

# convert the object into a dict
savings_response_dict = savings_response_instance.to_dict()
# create an instance of SavingsResponse from a dict
savings_response_from_dict = SavingsResponse.from_dict(savings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


