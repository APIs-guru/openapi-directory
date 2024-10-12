# AccountsList401Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | A human-readable explanation specific to this occurrence of the problem. | [optional] 
**instance** | **str** | A URI reference that identifies the specific occurrence of the problem.  It may or may not yield further information if dereferenced. | [optional] 
**status** | **object** |  | [optional] 
**title** | **object** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.accounts_list401_response import AccountsList401Response

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsList401Response from a JSON string
accounts_list401_response_instance = AccountsList401Response.from_json(json)
# print the JSON string representation of the object
print(AccountsList401Response.to_json())

# convert the object into a dict
accounts_list401_response_dict = accounts_list401_response_instance.to_dict()
# create an instance of AccountsList401Response from a dict
accounts_list401_response_from_dict = AccountsList401Response.from_dict(accounts_list401_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


