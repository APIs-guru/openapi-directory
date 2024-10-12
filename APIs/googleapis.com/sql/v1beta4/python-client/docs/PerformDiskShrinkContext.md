# PerformDiskShrinkContext

Perform disk shrink context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_size_gb** | **str** | The target disk shrink size in GigaBytes. | [optional] 

## Example

```python
from openapi_client.models.perform_disk_shrink_context import PerformDiskShrinkContext

# TODO update the JSON string below
json = "{}"
# create an instance of PerformDiskShrinkContext from a JSON string
perform_disk_shrink_context_instance = PerformDiskShrinkContext.from_json(json)
# print the JSON string representation of the object
print(PerformDiskShrinkContext.to_json())

# convert the object into a dict
perform_disk_shrink_context_dict = perform_disk_shrink_context_instance.to_dict()
# create an instance of PerformDiskShrinkContext from a dict
perform_disk_shrink_context_from_dict = PerformDiskShrinkContext.from_dict(perform_disk_shrink_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


