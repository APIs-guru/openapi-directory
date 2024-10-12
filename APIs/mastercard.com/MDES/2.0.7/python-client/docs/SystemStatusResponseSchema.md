# SystemStatusResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_status_response** | [**SystemStatusResponse**](SystemStatusResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.system_status_response_schema import SystemStatusResponseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of SystemStatusResponseSchema from a JSON string
system_status_response_schema_instance = SystemStatusResponseSchema.from_json(json)
# print the JSON string representation of the object
print(SystemStatusResponseSchema.to_json())

# convert the object into a dict
system_status_response_schema_dict = system_status_response_schema_instance.to_dict()
# create an instance of SystemStatusResponseSchema from a dict
system_status_response_schema_from_dict = SystemStatusResponseSchema.from_dict(system_status_response_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


