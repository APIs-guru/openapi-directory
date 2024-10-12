# Verification

A verification represents a verification attempt on a location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**announcement** | **str** | Optional. Response announcement set only if the method is VETTED_PARTNER. | [optional] 
**create_time** | **str** | The timestamp when the verification is requested. | [optional] 
**method** | **str** | The method of the verification. | [optional] 
**name** | **str** | Resource name of the verification. | [optional] 
**state** | **str** | The state of the verification. | [optional] 

## Example

```python
from openapi_client.models.verification import Verification

# TODO update the JSON string below
json = "{}"
# create an instance of Verification from a JSON string
verification_instance = Verification.from_json(json)
# print the JSON string representation of the object
print(Verification.to_json())

# convert the object into a dict
verification_dict = verification_instance.to_dict()
# create an instance of Verification from a dict
verification_from_dict = Verification.from_dict(verification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


