# BounceActivationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounce** | [**BounceInfoResponse**](BounceInfoResponse.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.bounce_activation_response import BounceActivationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BounceActivationResponse from a JSON string
bounce_activation_response_instance = BounceActivationResponse.from_json(json)
# print the JSON string representation of the object
print(BounceActivationResponse.to_json())

# convert the object into a dict
bounce_activation_response_dict = bounce_activation_response_instance.to_dict()
# create an instance of BounceActivationResponse from a dict
bounce_activation_response_from_dict = BounceActivationResponse.from_dict(bounce_activation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


