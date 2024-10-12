# ImportTargetsRequestAnyOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclusion_globs** | **str** | a comma-separated list of up to 10 folder names to exclude from scanning (each folder name must not exceed 100 characters). If not specified, it will default to \&quot;fixtures, tests, \\_\\_tests\\_\\_, node_modules\&quot;. If an empty string is provided - no folders will be excluded. This attribute is only respected with Open Source and Container scan targets. | [optional] 
**files** | **List[object]** | an array of file objects | [optional] 
**target** | [**ImportTargetsRequestAnyOfTarget**](ImportTargetsRequestAnyOfTarget.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_targets_request_any_of import ImportTargetsRequestAnyOf

# TODO update the JSON string below
json = "{}"
# create an instance of ImportTargetsRequestAnyOf from a JSON string
import_targets_request_any_of_instance = ImportTargetsRequestAnyOf.from_json(json)
# print the JSON string representation of the object
print(ImportTargetsRequestAnyOf.to_json())

# convert the object into a dict
import_targets_request_any_of_dict = import_targets_request_any_of_instance.to_dict()
# create an instance of ImportTargetsRequestAnyOf from a dict
import_targets_request_any_of_from_dict = ImportTargetsRequestAnyOf.from_dict(import_targets_request_any_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


