# InstanceAuthString

Instance AUTH string details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_string** | **str** | AUTH string set on the instance. | [optional] 

## Example

```python
from openapi_client.models.instance_auth_string import InstanceAuthString

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceAuthString from a JSON string
instance_auth_string_instance = InstanceAuthString.from_json(json)
# print the JSON string representation of the object
print(InstanceAuthString.to_json())

# convert the object into a dict
instance_auth_string_dict = instance_auth_string_instance.to_dict()
# create an instance of InstanceAuthString from a dict
instance_auth_string_from_dict = InstanceAuthString.from_dict(instance_auth_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


