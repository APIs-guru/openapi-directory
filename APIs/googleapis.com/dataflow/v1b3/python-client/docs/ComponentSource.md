# ComponentSource

Description of an interstitial value between transforms in an execution stage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Dataflow service generated name for this source. | [optional] 
**original_transform_or_collection** | **str** | User name for the original user transform or collection with which this source is most closely associated. | [optional] 
**user_name** | **str** | Human-readable name for this transform; may be user or system generated. | [optional] 

## Example

```python
from openapi_client.models.component_source import ComponentSource

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentSource from a JSON string
component_source_instance = ComponentSource.from_json(json)
# print the JSON string representation of the object
print(ComponentSource.to_json())

# convert the object into a dict
component_source_dict = component_source_instance.to_dict()
# create an instance of ComponentSource from a dict
component_source_from_dict = ComponentSource.from_dict(component_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


