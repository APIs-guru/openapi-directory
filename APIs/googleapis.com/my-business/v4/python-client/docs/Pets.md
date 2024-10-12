# Pets

Policies regarding guest-owned animals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cats_allowed** | **bool** | Cats allowed. Domesticated felines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee. | [optional] 
**cats_allowed_exception** | **str** | Cats allowed exception. | [optional] 
**dogs_allowed** | **bool** | Dogs allowed. Domesticated canines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee. | [optional] 
**dogs_allowed_exception** | **str** | Dogs allowed exception. | [optional] 
**pets_allowed** | **bool** | Pets allowed. Household animals are allowed at the property and in the specific guest room of their owner. May or may not include dogs, cats, reptiles and/or fish. May or may not require a fee. Service animals are not considered to be pets, so not governed by this policy. | [optional] 
**pets_allowed_exception** | **str** | Pets allowed exception. | [optional] 
**pets_allowed_free** | **bool** | Pets allowed free. Household animals are allowed at the property and in the specific guest room of their owner for free. May or may not include dogs, cats, reptiles, and/or fish. | [optional] 
**pets_allowed_free_exception** | **str** | Pets allowed free exception. | [optional] 

## Example

```python
from openapi_client.models.pets import Pets

# TODO update the JSON string below
json = "{}"
# create an instance of Pets from a JSON string
pets_instance = Pets.from_json(json)
# print the JSON string representation of the object
print(Pets.to_json())

# convert the object into a dict
pets_dict = pets_instance.to_dict()
# create an instance of Pets from a dict
pets_from_dict = Pets.from_dict(pets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


