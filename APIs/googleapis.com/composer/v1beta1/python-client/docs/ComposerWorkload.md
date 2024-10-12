# ComposerWorkload

Information about a single workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of a workload. | [optional] 
**status** | [**ComposerWorkloadStatus**](ComposerWorkloadStatus.md) |  | [optional] 
**type** | **str** | Type of a workload. | [optional] 

## Example

```python
from openapi_client.models.composer_workload import ComposerWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of ComposerWorkload from a JSON string
composer_workload_instance = ComposerWorkload.from_json(json)
# print the JSON string representation of the object
print(ComposerWorkload.to_json())

# convert the object into a dict
composer_workload_dict = composer_workload_instance.to_dict()
# create an instance of ComposerWorkload from a dict
composer_workload_from_dict = ComposerWorkload.from_dict(composer_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


