# ExternalAction

Action that is implemented and performed outside of the third-party application. It should redirect the merchant to the provided URL of an external system where they can perform the action. For example to request a review in the Merchant Center.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of external action. | [optional] 
**uri** | **str** | URL to external system, for example Merchant Center, where the merchant can perform the action. | [optional] 

## Example

```python
from openapi_client.models.external_action import ExternalAction

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalAction from a JSON string
external_action_instance = ExternalAction.from_json(json)
# print the JSON string representation of the object
print(ExternalAction.to_json())

# convert the object into a dict
external_action_dict = external_action_instance.to_dict()
# create an instance of ExternalAction from a dict
external_action_from_dict = ExternalAction.from_dict(external_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


