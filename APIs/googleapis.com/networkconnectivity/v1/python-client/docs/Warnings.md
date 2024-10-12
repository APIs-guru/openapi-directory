# Warnings

Informational warning message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Output only. A warning code, if applicable. | [optional] [readonly] 
**data** | **Dict[str, str]** | Output only. Metadata about this warning in key: value format. The key should provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement. | [optional] [readonly] 
**warning_message** | **str** | Output only. A human-readable description of the warning code. | [optional] [readonly] 

## Example

```python
from openapi_client.models.warnings import Warnings

# TODO update the JSON string below
json = "{}"
# create an instance of Warnings from a JSON string
warnings_instance = Warnings.from_json(json)
# print the JSON string representation of the object
print(Warnings.to_json())

# convert the object into a dict
warnings_dict = warnings_instance.to_dict()
# create an instance of Warnings from a dict
warnings_from_dict = Warnings.from_dict(warnings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


