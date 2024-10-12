# SecretRotationInfo

Resource provider deployment information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret_rotation_plan_instance_resource_id** | **str** | The identifier of the latest secret rotation plan instance resource. | [optional] 

## Example

```python
from openapi_client.models.secret_rotation_info import SecretRotationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SecretRotationInfo from a JSON string
secret_rotation_info_instance = SecretRotationInfo.from_json(json)
# print the JSON string representation of the object
print(SecretRotationInfo.to_json())

# convert the object into a dict
secret_rotation_info_dict = secret_rotation_info_instance.to_dict()
# create an instance of SecretRotationInfo from a dict
secret_rotation_info_from_dict = SecretRotationInfo.from_dict(secret_rotation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


