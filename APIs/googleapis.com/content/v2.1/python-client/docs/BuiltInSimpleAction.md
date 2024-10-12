# BuiltInSimpleAction

Action that is implemented and performed in (your) third-party application. Represents various functionality that is expected to be available to merchant and will help them with resolving the issue. The application should point the merchant to the place, where they can access the corresponding functionality. If the functionality is not supported, it is recommended to explain the situation to merchant and provide them with instructions how to solve the issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_content** | [**BuiltInSimpleActionAdditionalContent**](BuiltInSimpleActionAdditionalContent.md) |  | [optional] 
**attribute_code** | **str** | The attribute that needs to be updated. Present when the type is &#x60;EDIT_ITEM_ATTRIBUTE&#x60;. This field contains a code for attribute, represented in snake_case. You can find a list of product&#39;s attributes, with their codes [here](https://support.google.com/merchants/answer/7052112). | [optional] 
**type** | **str** | The type of action that represents a functionality that is expected to be available in third-party application. | [optional] 

## Example

```python
from openapi_client.models.built_in_simple_action import BuiltInSimpleAction

# TODO update the JSON string below
json = "{}"
# create an instance of BuiltInSimpleAction from a JSON string
built_in_simple_action_instance = BuiltInSimpleAction.from_json(json)
# print the JSON string representation of the object
print(BuiltInSimpleAction.to_json())

# convert the object into a dict
built_in_simple_action_dict = built_in_simple_action_instance.to_dict()
# create an instance of BuiltInSimpleAction from a dict
built_in_simple_action_from_dict = BuiltInSimpleAction.from_dict(built_in_simple_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


