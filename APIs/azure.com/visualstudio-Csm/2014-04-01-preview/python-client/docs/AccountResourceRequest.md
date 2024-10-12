# AccountResourceRequest

The body of a PUT request to modify a Visual Studio account resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The account name. | [optional] 
**location** | **str** | The Azure instance location. | [optional] 
**operation_type** | **str** | The type of the operation. | [optional] 
**properties** | **Dict[str, str]** | The custom properties of the resource. | [optional] 
**tags** | **Dict[str, str]** | The custom tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.account_resource_request import AccountResourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AccountResourceRequest from a JSON string
account_resource_request_instance = AccountResourceRequest.from_json(json)
# print the JSON string representation of the object
print(AccountResourceRequest.to_json())

# convert the object into a dict
account_resource_request_dict = account_resource_request_instance.to_dict()
# create an instance of AccountResourceRequest from a dict
account_resource_request_from_dict = AccountResourceRequest.from_dict(account_resource_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


