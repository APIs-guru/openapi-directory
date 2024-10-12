# ComponentPurgeStatusResponse

Response containing status for a specific purge operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Status of the operation represented by the requested Id. | 

## Example

```python
from openapi_client.models.component_purge_status_response import ComponentPurgeStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentPurgeStatusResponse from a JSON string
component_purge_status_response_instance = ComponentPurgeStatusResponse.from_json(json)
# print the JSON string representation of the object
print(ComponentPurgeStatusResponse.to_json())

# convert the object into a dict
component_purge_status_response_dict = component_purge_status_response_instance.to_dict()
# create an instance of ComponentPurgeStatusResponse from a dict
component_purge_status_response_from_dict = ComponentPurgeStatusResponse.from_dict(component_purge_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


