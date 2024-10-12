# ArrayOfUSOfficerDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**us_officer_dto** | [**List[USOfficerDTO]**](USOfficerDTO.md) |  | [optional] 

## Example

```python
from openapi_client.models.array_of_us_officer_dto import ArrayOfUSOfficerDTO

# TODO update the JSON string below
json = "{}"
# create an instance of ArrayOfUSOfficerDTO from a JSON string
array_of_us_officer_dto_instance = ArrayOfUSOfficerDTO.from_json(json)
# print the JSON string representation of the object
print(ArrayOfUSOfficerDTO.to_json())

# convert the object into a dict
array_of_us_officer_dto_dict = array_of_us_officer_dto_instance.to_dict()
# create an instance of ArrayOfUSOfficerDTO from a dict
array_of_us_officer_dto_from_dict = ArrayOfUSOfficerDTO.from_dict(array_of_us_officer_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


