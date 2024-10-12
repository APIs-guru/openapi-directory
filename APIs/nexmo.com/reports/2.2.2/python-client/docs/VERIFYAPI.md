# VERIFYAPI

Verify

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Network used to send the request. | [optional] 
**product** | [**ProductVerify**](ProductVerify.md) |  | [optional] 
**to** | **str** | Request to this number. | [optional] 

## Example

```python
from openapi_client.models.verifyapi import VERIFYAPI

# TODO update the JSON string below
json = "{}"
# create an instance of VERIFYAPI from a JSON string
verifyapi_instance = VERIFYAPI.from_json(json)
# print the JSON string representation of the object
print(VERIFYAPI.to_json())

# convert the object into a dict
verifyapi_dict = verifyapi_instance.to_dict()
# create an instance of VERIFYAPI from a dict
verifyapi_from_dict = VERIFYAPI.from_dict(verifyapi_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


