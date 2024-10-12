# SourceControl

Definition of the source control.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SourceControlProperties**](SourceControlProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.source_control import SourceControl

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControl from a JSON string
source_control_instance = SourceControl.from_json(json)
# print the JSON string representation of the object
print(SourceControl.to_json())

# convert the object into a dict
source_control_dict = source_control_instance.to_dict()
# create an instance of SourceControl from a dict
source_control_from_dict = SourceControl.from_dict(source_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


