# TokenAuth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date and time that the token authorization was created. | [optional] 
**enabled** | **bool** | Specify &lt;strong&gt;true&lt;/strong&gt; to enable token authorization or &lt;strong&gt;false&lt;/strong&gt; to disable. | [optional] 
**stream_target_id** | **str** | The unique alphanumeric string that identifies the stream target. | [optional] 
**trusted_shared_secret** | **str** | The trusted shared secret of the token authorization. Must contain only hexadecimal characters and be an even number of total characters not exceeding 32. | [optional] 
**updated_at** | **datetime** | The date and time that the token authorization was updated. | [optional] 

## Example

```python
from openapi_client.models.token_auth import TokenAuth

# TODO update the JSON string below
json = "{}"
# create an instance of TokenAuth from a JSON string
token_auth_instance = TokenAuth.from_json(json)
# print the JSON string representation of the object
print(TokenAuth.to_json())

# convert the object into a dict
token_auth_dict = token_auth_instance.to_dict()
# create an instance of TokenAuth from a dict
token_auth_from_dict = TokenAuth.from_dict(token_auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


