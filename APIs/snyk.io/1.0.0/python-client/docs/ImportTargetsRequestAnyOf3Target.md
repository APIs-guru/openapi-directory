# ImportTargetsRequestAnyOf3Target


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** | target branch name | [optional] 
**name** | **str** | custom name for the project | [optional] 
**project_key** | **str** | project key | 
**repo_slug** | **str** | slug of the repo | 

## Example

```python
from openapi_client.models.import_targets_request_any_of3_target import ImportTargetsRequestAnyOf3Target

# TODO update the JSON string below
json = "{}"
# create an instance of ImportTargetsRequestAnyOf3Target from a JSON string
import_targets_request_any_of3_target_instance = ImportTargetsRequestAnyOf3Target.from_json(json)
# print the JSON string representation of the object
print(ImportTargetsRequestAnyOf3Target.to_json())

# convert the object into a dict
import_targets_request_any_of3_target_dict = import_targets_request_any_of3_target_instance.to_dict()
# create an instance of ImportTargetsRequestAnyOf3Target from a dict
import_targets_request_any_of3_target_from_dict = ImportTargetsRequestAnyOf3Target.from_dict(import_targets_request_any_of3_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


