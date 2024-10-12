# CapitalDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ammount** | **str** |  | [optional] 
**currency** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**type_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.capital_dto import CapitalDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CapitalDTO from a JSON string
capital_dto_instance = CapitalDTO.from_json(json)
# print the JSON string representation of the object
print(CapitalDTO.to_json())

# convert the object into a dict
capital_dto_dict = capital_dto_instance.to_dict()
# create an instance of CapitalDTO from a dict
capital_dto_from_dict = CapitalDTO.from_dict(capital_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


