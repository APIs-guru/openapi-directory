# NewTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_token** | **str** |  | [optional] 
**expiration_date** | **datetime** |  | [optional] 
**user_token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.new_token_request import NewTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of NewTokenRequest from a JSON string
new_token_request_instance = NewTokenRequest.from_json(json)
# print the JSON string representation of the object
print(NewTokenRequest.to_json())

# convert the object into a dict
new_token_request_dict = new_token_request_instance.to_dict()
# create an instance of NewTokenRequest from a dict
new_token_request_from_dict = NewTokenRequest.from_dict(new_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


