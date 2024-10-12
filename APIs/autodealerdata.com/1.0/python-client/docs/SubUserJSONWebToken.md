# SubUserJSONWebToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_on** | **int** |  | [optional] 
**domain** | **str** |  | 
**end_points** | **List[str]** |  | [optional] [default to ["*"]]
**expires** | **int** |  | [optional] 
**token** | **str** |  | 
**uuid** | **str** |  | 

## Example

```python
from openapi_client.models.sub_user_json_web_token import SubUserJSONWebToken

# TODO update the JSON string below
json = "{}"
# create an instance of SubUserJSONWebToken from a JSON string
sub_user_json_web_token_instance = SubUserJSONWebToken.from_json(json)
# print the JSON string representation of the object
print(SubUserJSONWebToken.to_json())

# convert the object into a dict
sub_user_json_web_token_dict = sub_user_json_web_token_instance.to_dict()
# create an instance of SubUserJSONWebToken from a dict
sub_user_json_web_token_from_dict = SubUserJSONWebToken.from_dict(sub_user_json_web_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


