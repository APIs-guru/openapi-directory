# AccountResource

The response to an account resource GET request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, str]** | Resource properties. | [optional] 
**id** | **str** | Unique identifier of the resource. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.account_resource import AccountResource

# TODO update the JSON string below
json = "{}"
# create an instance of AccountResource from a JSON string
account_resource_instance = AccountResource.from_json(json)
# print the JSON string representation of the object
print(AccountResource.to_json())

# convert the object into a dict
account_resource_dict = account_resource_instance.to_dict()
# create an instance of AccountResource from a dict
account_resource_from_dict = AccountResource.from_dict(account_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


