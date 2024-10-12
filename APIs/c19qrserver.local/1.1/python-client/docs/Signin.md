# Signin

Payload of signin object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dt** | **float** | The original scan time in number of seconds since 1/1/1970 (GMT) | [optional] 
**email** | **str** | The person&#39;s email | [optional] 
**id** | **int** | The record id | [optional] 
**name** | **str** | The person&#39;s name | 
**phone** | **str** | The person&#39;s phone number | 

## Example

```python
from openapi_client.models.signin import Signin

# TODO update the JSON string below
json = "{}"
# create an instance of Signin from a JSON string
signin_instance = Signin.from_json(json)
# print the JSON string representation of the object
print(Signin.to_json())

# convert the object into a dict
signin_dict = signin_instance.to_dict()
# create an instance of Signin from a dict
signin_from_dict = Signin.from_dict(signin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


