# SessionParametersProperties

Collection of properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_certificate_thumbprint** | **str** | Encryption certificate thumbprint. | [optional] 
**credential_data_format** | **str** | Credential data format. | [optional] 
**password** | **str** | Encrypted Password associated with user name. | [optional] 
**retention_period** | **str** | Session retention period. | [optional] 
**user_name** | **str** | Encrypted User name to be used to connect to node. | [optional] 

## Example

```python
from openapi_client.models.session_parameters_properties import SessionParametersProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SessionParametersProperties from a JSON string
session_parameters_properties_instance = SessionParametersProperties.from_json(json)
# print the JSON string representation of the object
print(SessionParametersProperties.to_json())

# convert the object into a dict
session_parameters_properties_dict = session_parameters_properties_instance.to_dict()
# create an instance of SessionParametersProperties from a dict
session_parameters_properties_from_dict = SessionParametersProperties.from_dict(session_parameters_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


