# SecuritySchemeId

The ID of the issue security scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the issue security scheme. | [readonly] 

## Example

```python
from openapi_client.models.security_scheme_id import SecuritySchemeId

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySchemeId from a JSON string
security_scheme_id_instance = SecuritySchemeId.from_json(json)
# print the JSON string representation of the object
print(SecuritySchemeId.to_json())

# convert the object into a dict
security_scheme_id_dict = security_scheme_id_instance.to_dict()
# create an instance of SecuritySchemeId from a dict
security_scheme_id_from_dict = SecuritySchemeId.from_dict(security_scheme_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


