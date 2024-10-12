# OwnershipDetailsObject

The ownership details for one organisation. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beneficial_owners** | [**List[BeneficialOwnerObject]**](BeneficialOwnerObject.md) | The beneficial owners of the company, who aren&#39;t necessarily UBO&#39;s.  | [optional] 
**officers** | [**List[OfficerObject]**](OfficerObject.md) | Company office holders.  | [optional] 
**organisation** | [**EntityObject**](EntityObject.md) |  | [optional] 
**shareholdings** | [**List[ShareholdingObject]**](ShareholdingObject.md) | Parcels of shares held by one or more shareholders.  | [optional] 
**ultimate_beneficial_owners** | [**List[BeneficialOwnerObject]**](BeneficialOwnerObject.md) | The ultimate beneficial owners of the company.  | [optional] 

## Example

```python
from openapi_client.models.ownership_details_object import OwnershipDetailsObject

# TODO update the JSON string below
json = "{}"
# create an instance of OwnershipDetailsObject from a JSON string
ownership_details_object_instance = OwnershipDetailsObject.from_json(json)
# print the JSON string representation of the object
print(OwnershipDetailsObject.to_json())

# convert the object into a dict
ownership_details_object_dict = ownership_details_object_instance.to_dict()
# create an instance of OwnershipDetailsObject from a dict
ownership_details_object_from_dict = OwnershipDetailsObject.from_dict(ownership_details_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


