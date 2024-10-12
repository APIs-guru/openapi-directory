# LabCreationParameters

Settings related to creating a lab

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_users_in_lab** | **int** | Maximum number of users allowed in the lab. | [optional] 

## Example

```python
from openapi_client.models.lab_creation_parameters import LabCreationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of LabCreationParameters from a JSON string
lab_creation_parameters_instance = LabCreationParameters.from_json(json)
# print the JSON string representation of the object
print(LabCreationParameters.to_json())

# convert the object into a dict
lab_creation_parameters_dict = lab_creation_parameters_instance.to_dict()
# create an instance of LabCreationParameters from a dict
lab_creation_parameters_from_dict = LabCreationParameters.from_dict(lab_creation_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


