# NameAndUserDataContract

A combination of user defined name and user specified data for the person, largePersonGroup/personGroup, and largeFaceList/faceList.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | User defined name, maximum length is 128. | [optional] 
**user_data** | **str** | User specified data. Length should not exceed 16KB. | [optional] 

## Example

```python
from openapi_client.models.name_and_user_data_contract import NameAndUserDataContract

# TODO update the JSON string below
json = "{}"
# create an instance of NameAndUserDataContract from a JSON string
name_and_user_data_contract_instance = NameAndUserDataContract.from_json(json)
# print the JSON string representation of the object
print(NameAndUserDataContract.to_json())

# convert the object into a dict
name_and_user_data_contract_dict = name_and_user_data_contract_instance.to_dict()
# create an instance of NameAndUserDataContract from a dict
name_and_user_data_contract_from_dict = NameAndUserDataContract.from_dict(name_and_user_data_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


