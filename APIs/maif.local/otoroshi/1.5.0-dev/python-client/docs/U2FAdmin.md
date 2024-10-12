# U2FAdmin

Administrator using FIDO U2F device to access Otoroshi

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **int** | The creation date of the user | 
**label** | **str** | The label for the user | 
**password** | **str** | The hashed password of the user | 
**registration** | **Dict[str, str]** | The U2F registration slug | 
**username** | **str** | The email address of the user | 

## Example

```python
from openapi_client.models.u2_f_admin import U2FAdmin

# TODO update the JSON string below
json = "{}"
# create an instance of U2FAdmin from a JSON string
u2_f_admin_instance = U2FAdmin.from_json(json)
# print the JSON string representation of the object
print(U2FAdmin.to_json())

# convert the object into a dict
u2_f_admin_dict = u2_f_admin_instance.to_dict()
# create an instance of U2FAdmin from a dict
u2_f_admin_from_dict = U2FAdmin.from_dict(u2_f_admin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


