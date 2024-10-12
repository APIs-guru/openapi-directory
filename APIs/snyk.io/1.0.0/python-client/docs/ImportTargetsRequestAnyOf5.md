# ImportTargetsRequestAnyOf5


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | **List[object]** | an array of file objects | [optional] 
**target** | [**ImportTargetsRequestAnyOf5Target**](ImportTargetsRequestAnyOf5Target.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_targets_request_any_of5 import ImportTargetsRequestAnyOf5

# TODO update the JSON string below
json = "{}"
# create an instance of ImportTargetsRequestAnyOf5 from a JSON string
import_targets_request_any_of5_instance = ImportTargetsRequestAnyOf5.from_json(json)
# print the JSON string representation of the object
print(ImportTargetsRequestAnyOf5.to_json())

# convert the object into a dict
import_targets_request_any_of5_dict = import_targets_request_any_of5_instance.to_dict()
# create an instance of ImportTargetsRequestAnyOf5 from a dict
import_targets_request_any_of5_from_dict = ImportTargetsRequestAnyOf5.from_dict(import_targets_request_any_of5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


