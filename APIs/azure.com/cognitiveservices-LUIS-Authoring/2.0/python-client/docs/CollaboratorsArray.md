# CollaboratorsArray


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | The email address of the users. | [optional] 

## Example

```python
from openapi_client.models.collaborators_array import CollaboratorsArray

# TODO update the JSON string below
json = "{}"
# create an instance of CollaboratorsArray from a JSON string
collaborators_array_instance = CollaboratorsArray.from_json(json)
# print the JSON string representation of the object
print(CollaboratorsArray.to_json())

# convert the object into a dict
collaborators_array_dict = collaborators_array_instance.to_dict()
# create an instance of CollaboratorsArray from a dict
collaborators_array_from_dict = CollaboratorsArray.from_dict(collaborators_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


