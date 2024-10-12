# RetrieveASingleProject200ResponseImportingUser

The user who imported the project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email of the user. | [optional] 
**id** | **str** | The ID of the user. | [optional] 
**name** | **str** | The name of the user. | [optional] 
**username** | **str** | The username of the user. | [optional] 

## Example

```python
from openapi_client.models.retrieve_a_single_project200_response_importing_user import RetrieveASingleProject200ResponseImportingUser

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveASingleProject200ResponseImportingUser from a JSON string
retrieve_a_single_project200_response_importing_user_instance = RetrieveASingleProject200ResponseImportingUser.from_json(json)
# print the JSON string representation of the object
print(RetrieveASingleProject200ResponseImportingUser.to_json())

# convert the object into a dict
retrieve_a_single_project200_response_importing_user_dict = retrieve_a_single_project200_response_importing_user_instance.to_dict()
# create an instance of RetrieveASingleProject200ResponseImportingUser from a dict
retrieve_a_single_project200_response_importing_user_from_dict = RetrieveASingleProject200ResponseImportingUser.from_dict(retrieve_a_single_project200_response_importing_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


