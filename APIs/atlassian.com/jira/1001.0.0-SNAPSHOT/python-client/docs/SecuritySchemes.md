# SecuritySchemes

List of security schemes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_security_schemes** | [**List[SecurityScheme]**](SecurityScheme.md) | List of security schemes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_schemes import SecuritySchemes

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySchemes from a JSON string
security_schemes_instance = SecuritySchemes.from_json(json)
# print the JSON string representation of the object
print(SecuritySchemes.to_json())

# convert the object into a dict
security_schemes_dict = security_schemes_instance.to_dict()
# create an instance of SecuritySchemes from a dict
security_schemes_from_dict = SecuritySchemes.from_dict(security_schemes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


