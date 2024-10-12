# TargetComputeSizeCollection

Target compute size collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[TargetComputeSize]**](TargetComputeSize.md) | The list of target compute sizes. | [optional] 

## Example

```python
from openapi_client.models.target_compute_size_collection import TargetComputeSizeCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TargetComputeSizeCollection from a JSON string
target_compute_size_collection_instance = TargetComputeSizeCollection.from_json(json)
# print the JSON string representation of the object
print(TargetComputeSizeCollection.to_json())

# convert the object into a dict
target_compute_size_collection_dict = target_compute_size_collection_instance.to_dict()
# create an instance of TargetComputeSizeCollection from a dict
target_compute_size_collection_from_dict = TargetComputeSizeCollection.from_dict(target_compute_size_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


