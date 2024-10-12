# AccountTagRequest

The body of a Patch request to add tags to a Visual Studio account resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | The custom tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.account_tag_request import AccountTagRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AccountTagRequest from a JSON string
account_tag_request_instance = AccountTagRequest.from_json(json)
# print the JSON string representation of the object
print(AccountTagRequest.to_json())

# convert the object into a dict
account_tag_request_dict = account_tag_request_instance.to_dict()
# create an instance of AccountTagRequest from a dict
account_tag_request_from_dict = AccountTagRequest.from_dict(account_tag_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


