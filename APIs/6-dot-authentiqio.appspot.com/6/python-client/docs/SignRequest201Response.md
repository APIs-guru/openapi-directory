# SignRequest201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | **str** | 20-character ID | [optional] 
**status** | **str** | waiting | [optional] 

## Example

```python
from openapi_client.models.sign_request201_response import SignRequest201Response

# TODO update the JSON string below
json = "{}"
# create an instance of SignRequest201Response from a JSON string
sign_request201_response_instance = SignRequest201Response.from_json(json)
# print the JSON string representation of the object
print(SignRequest201Response.to_json())

# convert the object into a dict
sign_request201_response_dict = sign_request201_response_instance.to_dict()
# create an instance of SignRequest201Response from a dict
sign_request201_response_from_dict = SignRequest201Response.from_dict(sign_request201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


