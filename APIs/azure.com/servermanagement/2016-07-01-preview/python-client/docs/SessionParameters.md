# SessionParameters

Parameter collection for creation and other operations on sessions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SessionParametersProperties**](SessionParametersProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.session_parameters import SessionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SessionParameters from a JSON string
session_parameters_instance = SessionParameters.from_json(json)
# print the JSON string representation of the object
print(SessionParameters.to_json())

# convert the object into a dict
session_parameters_dict = session_parameters_instance.to_dict()
# create an instance of SessionParameters from a dict
session_parameters_from_dict = SessionParameters.from_dict(session_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


