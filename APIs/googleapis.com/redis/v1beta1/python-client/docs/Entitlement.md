# Entitlement

Proto representing the access that a user has to a specific feature/service. NextId: 3.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement_state** | **str** | The current state of user&#39;s accessibility to a feature/benefit. | [optional] 
**type** | **str** | An enum that represents the type of this entitlement. | [optional] 

## Example

```python
from openapi_client.models.entitlement import Entitlement

# TODO update the JSON string below
json = "{}"
# create an instance of Entitlement from a JSON string
entitlement_instance = Entitlement.from_json(json)
# print the JSON string representation of the object
print(Entitlement.to_json())

# convert the object into a dict
entitlement_dict = entitlement_instance.to_dict()
# create an instance of Entitlement from a dict
entitlement_from_dict = Entitlement.from_dict(entitlement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


