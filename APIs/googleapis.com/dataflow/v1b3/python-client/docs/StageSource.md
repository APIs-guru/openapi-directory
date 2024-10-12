# StageSource

Description of an input or output of an execution stage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Dataflow service generated name for this source. | [optional] 
**original_transform_or_collection** | **str** | User name for the original user transform or collection with which this source is most closely associated. | [optional] 
**size_bytes** | **str** | Size of the source, if measurable. | [optional] 
**user_name** | **str** | Human-readable name for this source; may be user or system generated. | [optional] 

## Example

```python
from openapi_client.models.stage_source import StageSource

# TODO update the JSON string below
json = "{}"
# create an instance of StageSource from a JSON string
stage_source_instance = StageSource.from_json(json)
# print the JSON string representation of the object
print(StageSource.to_json())

# convert the object into a dict
stage_source_dict = stage_source_instance.to_dict()
# create an instance of StageSource from a dict
stage_source_from_dict = StageSource.from_dict(stage_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


