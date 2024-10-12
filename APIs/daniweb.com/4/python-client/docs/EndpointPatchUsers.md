# EndpointPatchUsers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Me**](Me.md) |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_patch_users import EndpointPatchUsers

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPatchUsers from a JSON string
endpoint_patch_users_instance = EndpointPatchUsers.from_json(json)
# print the JSON string representation of the object
print(EndpointPatchUsers.to_json())

# convert the object into a dict
endpoint_patch_users_dict = endpoint_patch_users_instance.to_dict()
# create an instance of EndpointPatchUsers from a dict
endpoint_patch_users_from_dict = EndpointPatchUsers.from_dict(endpoint_patch_users_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


