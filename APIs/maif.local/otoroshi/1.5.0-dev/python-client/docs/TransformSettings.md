# TransformSettings

Settings to transform a JWT token and its location

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**GlobalJwtVerifierSource**](GlobalJwtVerifierSource.md) |  | 
**mapping_settings** | [**MappingSettings**](MappingSettings.md) |  | 

## Example

```python
from openapi_client.models.transform_settings import TransformSettings

# TODO update the JSON string below
json = "{}"
# create an instance of TransformSettings from a JSON string
transform_settings_instance = TransformSettings.from_json(json)
# print the JSON string representation of the object
print(TransformSettings.to_json())

# convert the object into a dict
transform_settings_dict = transform_settings_instance.to_dict()
# create an instance of TransformSettings from a dict
transform_settings_from_dict = TransformSettings.from_dict(transform_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


