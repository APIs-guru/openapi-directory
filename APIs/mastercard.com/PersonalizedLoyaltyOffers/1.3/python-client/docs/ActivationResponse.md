# ActivationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sc_activation** | [**ScActivation**](ScActivation.md) |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.activation_response import ActivationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ActivationResponse from a JSON string
activation_response_instance = ActivationResponse.from_json(json)
# print the JSON string representation of the object
print(ActivationResponse.to_json())

# convert the object into a dict
activation_response_dict = activation_response_instance.to_dict()
# create an instance of ActivationResponse from a dict
activation_response_from_dict = ActivationResponse.from_dict(activation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


