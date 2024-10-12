# SubjectConfig

These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject** | [**Subject**](Subject.md) |  | [optional] 
**subject_alt_name** | [**SubjectAltNames**](SubjectAltNames.md) |  | [optional] 

## Example

```python
from openapi_client.models.subject_config import SubjectConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SubjectConfig from a JSON string
subject_config_instance = SubjectConfig.from_json(json)
# print the JSON string representation of the object
print(SubjectConfig.to_json())

# convert the object into a dict
subject_config_dict = subject_config_instance.to_dict()
# create an instance of SubjectConfig from a dict
subject_config_from_dict = SubjectConfig.from_dict(subject_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


