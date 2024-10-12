# ControlResponse

Success

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** | The &#x60;cmd&#x60; you sent in the request. | [optional] 
**status** | **str** | &#x60;cmd&#x60; | Code | Description -- | -- | -- Any | 0 | Success  | [optional] 

## Example

```python
from openapi_client.models.control_response import ControlResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControlResponse from a JSON string
control_response_instance = ControlResponse.from_json(json)
# print the JSON string representation of the object
print(ControlResponse.to_json())

# convert the object into a dict
control_response_dict = control_response_instance.to_dict()
# create an instance of ControlResponse from a dict
control_response_from_dict = ControlResponse.from_dict(control_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


