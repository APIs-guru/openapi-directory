# JSONWebToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_on** | **int** |  | [optional] 
**expires** | **int** |  | [optional] 
**token** | **str** |  | 

## Example

```python
from openapi_client.models.json_web_token import JSONWebToken

# TODO update the JSON string below
json = "{}"
# create an instance of JSONWebToken from a JSON string
json_web_token_instance = JSONWebToken.from_json(json)
# print the JSON string representation of the object
print(JSONWebToken.to_json())

# convert the object into a dict
json_web_token_dict = json_web_token_instance.to_dict()
# create an instance of JSONWebToken from a dict
json_web_token_from_dict = JSONWebToken.from_dict(json_web_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


