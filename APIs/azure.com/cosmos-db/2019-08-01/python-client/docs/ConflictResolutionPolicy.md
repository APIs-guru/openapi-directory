# ConflictResolutionPolicy

The conflict resolution policy for the container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conflict_resolution_path** | **str** | The conflict resolution path in the case of LastWriterWins mode. | [optional] 
**conflict_resolution_procedure** | **str** | The procedure to resolve conflicts in the case of custom mode. | [optional] 
**mode** | **str** | Indicates the conflict resolution mode. | [optional] [default to 'LastWriterWins']

## Example

```python
from openapi_client.models.conflict_resolution_policy import ConflictResolutionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ConflictResolutionPolicy from a JSON string
conflict_resolution_policy_instance = ConflictResolutionPolicy.from_json(json)
# print the JSON string representation of the object
print(ConflictResolutionPolicy.to_json())

# convert the object into a dict
conflict_resolution_policy_dict = conflict_resolution_policy_instance.to_dict()
# create an instance of ConflictResolutionPolicy from a dict
conflict_resolution_policy_from_dict = ConflictResolutionPolicy.from_dict(conflict_resolution_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


