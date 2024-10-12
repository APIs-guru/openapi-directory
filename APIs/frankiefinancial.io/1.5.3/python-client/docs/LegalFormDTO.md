# LegalFormDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basis** | **str** |  | [optional] 
**capital** | **str** |  | [optional] 
**comments** | **str** |  | [optional] 
**control** | **str** |  | [optional] 
**incorp** | **str** |  | [optional] 
**partner** | **str** |  | [optional] 
**responsibility** | **str** |  | [optional] 
**stocks** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.legal_form_dto import LegalFormDTO

# TODO update the JSON string below
json = "{}"
# create an instance of LegalFormDTO from a JSON string
legal_form_dto_instance = LegalFormDTO.from_json(json)
# print the JSON string representation of the object
print(LegalFormDTO.to_json())

# convert the object into a dict
legal_form_dto_dict = legal_form_dto_instance.to_dict()
# create an instance of LegalFormDTO from a dict
legal_form_dto_from_dict = LegalFormDTO.from_dict(legal_form_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


