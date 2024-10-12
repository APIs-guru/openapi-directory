# DeactivationIntentDescription

Describes the intent or reason for deactivating the node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deactivation_intent** | **str** | Describes the intent or reason for deactivating the node. The possible values are following.  | [optional] 

## Example

```python
from openapi_client.models.deactivation_intent_description import DeactivationIntentDescription

# TODO update the JSON string below
json = "{}"
# create an instance of DeactivationIntentDescription from a JSON string
deactivation_intent_description_instance = DeactivationIntentDescription.from_json(json)
# print the JSON string representation of the object
print(DeactivationIntentDescription.to_json())

# convert the object into a dict
deactivation_intent_description_dict = deactivation_intent_description_instance.to_dict()
# create an instance of DeactivationIntentDescription from a dict
deactivation_intent_description_from_dict = DeactivationIntentDescription.from_dict(deactivation_intent_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


