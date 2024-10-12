# TokenAuth1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Specify &lt;strong&gt;true&lt;/strong&gt; to enable token authorization or &lt;strong&gt;false&lt;/strong&gt; to disable. | 
**trusted_shared_secret** | **str** | The trusted shared secret of the token authorization. Must contain only hexadecimal characters and be an even number of total characters not exceeding 32. | 

## Example

```python
from openapi_client.models.token_auth1 import TokenAuth1

# TODO update the JSON string below
json = "{}"
# create an instance of TokenAuth1 from a JSON string
token_auth1_instance = TokenAuth1.from_json(json)
# print the JSON string representation of the object
print(TokenAuth1.to_json())

# convert the object into a dict
token_auth1_dict = token_auth1_instance.to_dict()
# create an instance of TokenAuth1 from a dict
token_auth1_from_dict = TokenAuth1.from_dict(token_auth1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


