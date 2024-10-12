# ComponentPurgeResponse

Response containing operationId for a specific purge action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_id** | **str** | Id to use when querying for status for a particular purge operation. | 

## Example

```python
from openapi_client.models.component_purge_response import ComponentPurgeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentPurgeResponse from a JSON string
component_purge_response_instance = ComponentPurgeResponse.from_json(json)
# print the JSON string representation of the object
print(ComponentPurgeResponse.to_json())

# convert the object into a dict
component_purge_response_dict = component_purge_response_instance.to_dict()
# create an instance of ComponentPurgeResponse from a dict
component_purge_response_from_dict = ComponentPurgeResponse.from_dict(component_purge_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


