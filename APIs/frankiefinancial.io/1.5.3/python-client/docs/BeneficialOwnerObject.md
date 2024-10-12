# BeneficialOwnerObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | **str** | The entityId of the owner.  | [optional] 
**percentage_held** | [**BeneficialOwnerObjectPercentageHeld**](BeneficialOwnerObjectPercentageHeld.md) |  | [optional] 

## Example

```python
from openapi_client.models.beneficial_owner_object import BeneficialOwnerObject

# TODO update the JSON string below
json = "{}"
# create an instance of BeneficialOwnerObject from a JSON string
beneficial_owner_object_instance = BeneficialOwnerObject.from_json(json)
# print the JSON string representation of the object
print(BeneficialOwnerObject.to_json())

# convert the object into a dict
beneficial_owner_object_dict = beneficial_owner_object_instance.to_dict()
# create an instance of BeneficialOwnerObject from a dict
beneficial_owner_object_from_dict = BeneficialOwnerObject.from_dict(beneficial_owner_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


