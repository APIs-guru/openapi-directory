# USOfficerDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**business_address** | [**ArrayOfString1**](ArrayOfString1.md) |  | [optional] 
**var_date** | **str** |  | [optional] 
**mailing_address** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.us_officer_dto import USOfficerDTO

# TODO update the JSON string below
json = "{}"
# create an instance of USOfficerDTO from a JSON string
us_officer_dto_instance = USOfficerDTO.from_json(json)
# print the JSON string representation of the object
print(USOfficerDTO.to_json())

# convert the object into a dict
us_officer_dto_dict = us_officer_dto_instance.to_dict()
# create an instance of USOfficerDTO from a dict
us_officer_dto_from_dict = USOfficerDTO.from_dict(us_officer_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


