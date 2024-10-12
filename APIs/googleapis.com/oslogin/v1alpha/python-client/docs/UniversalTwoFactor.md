# UniversalTwoFactor

Security key information specific to the U2F protocol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | Application ID for the U2F protocol. | [optional] 

## Example

```python
from openapi_client.models.universal_two_factor import UniversalTwoFactor

# TODO update the JSON string below
json = "{}"
# create an instance of UniversalTwoFactor from a JSON string
universal_two_factor_instance = UniversalTwoFactor.from_json(json)
# print the JSON string representation of the object
print(UniversalTwoFactor.to_json())

# convert the object into a dict
universal_two_factor_dict = universal_two_factor_instance.to_dict()
# create an instance of UniversalTwoFactor from a dict
universal_two_factor_from_dict = UniversalTwoFactor.from_dict(universal_two_factor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


