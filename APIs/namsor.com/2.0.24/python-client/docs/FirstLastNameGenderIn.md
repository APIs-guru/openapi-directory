# FirstLastNameGenderIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**gender** | **str** | The known gender of the name | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.first_last_name_gender_in import FirstLastNameGenderIn

# TODO update the JSON string below
json = "{}"
# create an instance of FirstLastNameGenderIn from a JSON string
first_last_name_gender_in_instance = FirstLastNameGenderIn.from_json(json)
# print the JSON string representation of the object
print(FirstLastNameGenderIn.to_json())

# convert the object into a dict
first_last_name_gender_in_dict = first_last_name_gender_in_instance.to_dict()
# create an instance of FirstLastNameGenderIn from a dict
first_last_name_gender_in_from_dict = FirstLastNameGenderIn.from_dict(first_last_name_gender_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


