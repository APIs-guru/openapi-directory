# AADUser

an AAD user's id and tenant id

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | the aad user&#39;s id | 
**tenant_id** | **str** | the aad user&#39;s tenant id | 

## Example

```python
from openapi_client.models.aad_user import AADUser

# TODO update the JSON string below
json = "{}"
# create an instance of AADUser from a JSON string
aad_user_instance = AADUser.from_json(json)
# print the JSON string representation of the object
print(AADUser.to_json())

# convert the object into a dict
aad_user_dict = aad_user_instance.to_dict()
# create an instance of AADUser from a dict
aad_user_from_dict = AADUser.from_dict(aad_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


