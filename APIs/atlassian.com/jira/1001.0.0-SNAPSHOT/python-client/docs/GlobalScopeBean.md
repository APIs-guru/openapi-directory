# GlobalScopeBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **List[str]** | Defines the behavior of the option in the global context.If notSelectable is set, the option cannot be set as the field&#39;s value. This is useful for archiving an option that has previously been selected but shouldn&#39;t be used anymore.If defaultValue is set, the option is selected by default. | [optional] 

## Example

```python
from openapi_client.models.global_scope_bean import GlobalScopeBean

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalScopeBean from a JSON string
global_scope_bean_instance = GlobalScopeBean.from_json(json)
# print the JSON string representation of the object
print(GlobalScopeBean.to_json())

# convert the object into a dict
global_scope_bean_dict = global_scope_bean_instance.to_dict()
# create an instance of GlobalScopeBean from a dict
global_scope_bean_from_dict = GlobalScopeBean.from_dict(global_scope_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


