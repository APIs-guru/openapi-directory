# ModifyLinkedOfferObjects


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_linked_offer_object_ids** | **List[str]** | The linked offer object ids to add to the object. | [optional] 
**remove_linked_offer_object_ids** | **List[str]** | The linked offer object ids to remove from the object. | [optional] 

## Example

```python
from openapi_client.models.modify_linked_offer_objects import ModifyLinkedOfferObjects

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyLinkedOfferObjects from a JSON string
modify_linked_offer_objects_instance = ModifyLinkedOfferObjects.from_json(json)
# print the JSON string representation of the object
print(ModifyLinkedOfferObjects.to_json())

# convert the object into a dict
modify_linked_offer_objects_dict = modify_linked_offer_objects_instance.to_dict()
# create an instance of ModifyLinkedOfferObjects from a dict
modify_linked_offer_objects_from_dict = ModifyLinkedOfferObjects.from_dict(modify_linked_offer_objects_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


