# ActivateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sc_activation** | [**ScActivation**](ScActivation.md) |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.activate_response import ActivateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ActivateResponse from a JSON string
activate_response_instance = ActivateResponse.from_json(json)
# print the JSON string representation of the object
print(ActivateResponse.to_json())

# convert the object into a dict
activate_response_dict = activate_response_instance.to_dict()
# create an instance of ActivateResponse from a dict
activate_response_from_dict = ActivateResponse.from_dict(activate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


