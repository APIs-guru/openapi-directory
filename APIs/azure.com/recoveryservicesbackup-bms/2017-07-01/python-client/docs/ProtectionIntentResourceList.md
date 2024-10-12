# ProtectionIntentResourceList

List of ProtectionIntent resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ProtectionIntentResource]**](ProtectionIntentResource.md) | List of resources. | [optional] 
**next_link** | **str** | The uri to fetch the next page of resources. Call ListNext() fetches next page of resources. | [optional] 

## Example

```python
from openapi_client.models.protection_intent_resource_list import ProtectionIntentResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionIntentResourceList from a JSON string
protection_intent_resource_list_instance = ProtectionIntentResourceList.from_json(json)
# print the JSON string representation of the object
print(ProtectionIntentResourceList.to_json())

# convert the object into a dict
protection_intent_resource_list_dict = protection_intent_resource_list_instance.to_dict()
# create an instance of ProtectionIntentResourceList from a dict
protection_intent_resource_list_from_dict = ProtectionIntentResourceList.from_dict(protection_intent_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


