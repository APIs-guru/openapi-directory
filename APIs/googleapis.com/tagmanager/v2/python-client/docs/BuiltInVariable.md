# BuiltInVariable

Built-in variables are a special category of variables that are pre-created and non-customizable. They provide common functionality like accessing properties of the gtm data layer, monitoring clicks, or accessing elements of a page URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**container_id** | **str** | GTM Container ID. | [optional] 
**name** | **str** | Name of the built-in variable to be used to refer to the built-in variable. | [optional] 
**path** | **str** | GTM BuiltInVariable&#39;s API relative path. | [optional] 
**type** | **str** | Type of built-in variable. @required.tagmanager.accounts.containers.workspaces.built_in_variable.update @mutable tagmanager.accounts.containers.workspaces.built_in_variable.update | [optional] 
**workspace_id** | **str** | GTM Workspace ID. | [optional] 

## Example

```python
from openapi_client.models.built_in_variable import BuiltInVariable

# TODO update the JSON string below
json = "{}"
# create an instance of BuiltInVariable from a JSON string
built_in_variable_instance = BuiltInVariable.from_json(json)
# print the JSON string representation of the object
print(BuiltInVariable.to_json())

# convert the object into a dict
built_in_variable_dict = built_in_variable_instance.to_dict()
# create an instance of BuiltInVariable from a dict
built_in_variable_from_dict = BuiltInVariable.from_dict(built_in_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


