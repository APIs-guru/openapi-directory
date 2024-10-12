# SimpleAdmin

Administrator using just login/password tuple to access Otoroshi

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **int** | The creation date of the user | 
**label** | **str** | The label for the user | 
**password** | **str** | The hashed password of the user | 
**username** | **str** | The email address of the user | 

## Example

```python
from openapi_client.models.simple_admin import SimpleAdmin

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleAdmin from a JSON string
simple_admin_instance = SimpleAdmin.from_json(json)
# print the JSON string representation of the object
print(SimpleAdmin.to_json())

# convert the object into a dict
simple_admin_dict = simple_admin_instance.to_dict()
# create an instance of SimpleAdmin from a dict
simple_admin_from_dict = SimpleAdmin.from_dict(simple_admin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


