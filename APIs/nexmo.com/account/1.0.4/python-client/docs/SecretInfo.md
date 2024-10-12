# SecretInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**SecretMgmtLinks**](SecretMgmtLinks.md) |  | [optional] 
**created_at** | **str** | Creation date/time for this secret | [optional] 
**id** | **str** | Secret ID | [optional] 

## Example

```python
from openapi_client.models.secret_info import SecretInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SecretInfo from a JSON string
secret_info_instance = SecretInfo.from_json(json)
# print the JSON string representation of the object
print(SecretInfo.to_json())

# convert the object into a dict
secret_info_dict = secret_info_instance.to_dict()
# create an instance of SecretInfo from a dict
secret_info_from_dict = SecretInfo.from_dict(secret_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


