# Backend

`Backend` defines the backend configuration for a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[BackendRule]**](BackendRule.md) | A list of API backend rules that apply to individual API methods. **NOTE:** All service configuration rules follow \&quot;last one wins\&quot; order. | [optional] 

## Example

```python
from openapi_client.models.backend import Backend

# TODO update the JSON string below
json = "{}"
# create an instance of Backend from a JSON string
backend_instance = Backend.from_json(json)
# print the JSON string representation of the object
print(Backend.to_json())

# convert the object into a dict
backend_dict = backend_instance.to_dict()
# create an instance of Backend from a dict
backend_from_dict = Backend.from_dict(backend_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


