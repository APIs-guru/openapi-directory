# TokenAuth2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Specify &lt;strong&gt;true&lt;/strong&gt; to enable token authorization or &lt;strong&gt;false&lt;/strong&gt; to disable. | [optional] 
**trusted_shared_secret** | **str** | The trusted shared secret of the token authorization. Must contain only hexadecimal characters and be an even number of total characters not exceeding 32. | [optional] 

## Example

```python
from openapi_client.models.token_auth2 import TokenAuth2

# TODO update the JSON string below
json = "{}"
# create an instance of TokenAuth2 from a JSON string
token_auth2_instance = TokenAuth2.from_json(json)
# print the JSON string representation of the object
print(TokenAuth2.to_json())

# convert the object into a dict
token_auth2_dict = token_auth2_instance.to_dict()
# create an instance of TokenAuth2 from a dict
token_auth2_from_dict = TokenAuth2.from_dict(token_auth2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


