# AccountFilter

An Account Filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MediaFilterProperties**](MediaFilterProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource ID for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.account_filter import AccountFilter

# TODO update the JSON string below
json = "{}"
# create an instance of AccountFilter from a JSON string
account_filter_instance = AccountFilter.from_json(json)
# print the JSON string representation of the object
print(AccountFilter.to_json())

# convert the object into a dict
account_filter_dict = account_filter_instance.to_dict()
# create an instance of AccountFilter from a dict
account_filter_from_dict = AccountFilter.from_dict(account_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


