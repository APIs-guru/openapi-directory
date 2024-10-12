# ImportTargetsRequestAnyOf3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclusion_globs** | **str** | a comma-separated list of up to 10 folder names to exclude from scanning. If not specified, it will default to \&quot;fixtures, tests, \\_\\_tests\\_\\_, node_modules\&quot;. If an empty string is provided - no folders will be excluded. This attribute is only respected with Open Source and Container scan targets. | [optional] 
**files** | **List[object]** | an array of file objects | [optional] 
**target** | [**ImportTargetsRequestAnyOf3Target**](ImportTargetsRequestAnyOf3Target.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_targets_request_any_of3 import ImportTargetsRequestAnyOf3

# TODO update the JSON string below
json = "{}"
# create an instance of ImportTargetsRequestAnyOf3 from a JSON string
import_targets_request_any_of3_instance = ImportTargetsRequestAnyOf3.from_json(json)
# print the JSON string representation of the object
print(ImportTargetsRequestAnyOf3.to_json())

# convert the object into a dict
import_targets_request_any_of3_dict = import_targets_request_any_of3_instance.to_dict()
# create an instance of ImportTargetsRequestAnyOf3 from a dict
import_targets_request_any_of3_from_dict = ImportTargetsRequestAnyOf3.from_dict(import_targets_request_any_of3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


