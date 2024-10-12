# SignUpInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_id** | **str** | ID of the class the user can sign up for. | [optional] 

## Example

```python
from openapi_client.models.sign_up_info import SignUpInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SignUpInfo from a JSON string
sign_up_info_instance = SignUpInfo.from_json(json)
# print the JSON string representation of the object
print(SignUpInfo.to_json())

# convert the object into a dict
sign_up_info_dict = sign_up_info_instance.to_dict()
# create an instance of SignUpInfo from a dict
sign_up_info_from_dict = SignUpInfo.from_dict(sign_up_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


