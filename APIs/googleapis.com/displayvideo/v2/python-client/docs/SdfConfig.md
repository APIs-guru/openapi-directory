# SdfConfig

Structured Data File (SDF) related settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_email** | **str** | An administrator email address to which the SDF processing status reports will be sent. | [optional] 
**version** | **str** | Required. The version of SDF being used. | [optional] 

## Example

```python
from openapi_client.models.sdf_config import SdfConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SdfConfig from a JSON string
sdf_config_instance = SdfConfig.from_json(json)
# print the JSON string representation of the object
print(SdfConfig.to_json())

# convert the object into a dict
sdf_config_dict = sdf_config_instance.to_dict()
# create an instance of SdfConfig from a dict
sdf_config_from_dict = SdfConfig.from_dict(sdf_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


