# ImportTargetsRequestAnyOf6


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | **List[object]** | an array of file objects | [optional] 
**target** | [**ImportTargetsRequestAnyOf6Target**](ImportTargetsRequestAnyOf6Target.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_targets_request_any_of6 import ImportTargetsRequestAnyOf6

# TODO update the JSON string below
json = "{}"
# create an instance of ImportTargetsRequestAnyOf6 from a JSON string
import_targets_request_any_of6_instance = ImportTargetsRequestAnyOf6.from_json(json)
# print the JSON string representation of the object
print(ImportTargetsRequestAnyOf6.to_json())

# convert the object into a dict
import_targets_request_any_of6_dict = import_targets_request_any_of6_instance.to_dict()
# create an instance of ImportTargetsRequestAnyOf6 from a dict
import_targets_request_any_of6_from_dict = ImportTargetsRequestAnyOf6.from_dict(import_targets_request_any_of6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


