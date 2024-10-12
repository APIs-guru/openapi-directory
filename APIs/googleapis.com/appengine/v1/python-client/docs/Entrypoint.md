# Entrypoint

The entrypoint for the application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shell** | **str** | The format should be a shell command that can be fed to bash -c. | [optional] 

## Example

```python
from openapi_client.models.entrypoint import Entrypoint

# TODO update the JSON string below
json = "{}"
# create an instance of Entrypoint from a JSON string
entrypoint_instance = Entrypoint.from_json(json)
# print the JSON string representation of the object
print(Entrypoint.to_json())

# convert the object into a dict
entrypoint_dict = entrypoint_instance.to_dict()
# create an instance of Entrypoint from a dict
entrypoint_from_dict = Entrypoint.from_dict(entrypoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


