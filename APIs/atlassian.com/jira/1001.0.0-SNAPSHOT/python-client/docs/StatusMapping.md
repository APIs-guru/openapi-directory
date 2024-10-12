# StatusMapping

Details about the mapping from a status to a new status for an issue type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type_id** | **str** | The ID of the issue type. | 
**new_status_id** | **str** | The ID of the new status. | 
**status_id** | **str** | The ID of the status. | 

## Example

```python
from openapi_client.models.status_mapping import StatusMapping

# TODO update the JSON string below
json = "{}"
# create an instance of StatusMapping from a JSON string
status_mapping_instance = StatusMapping.from_json(json)
# print the JSON string representation of the object
print(StatusMapping.to_json())

# convert the object into a dict
status_mapping_dict = status_mapping_instance.to_dict()
# create an instance of StatusMapping from a dict
status_mapping_from_dict = StatusMapping.from_dict(status_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


