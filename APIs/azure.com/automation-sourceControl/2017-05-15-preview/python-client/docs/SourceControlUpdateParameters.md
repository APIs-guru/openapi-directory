# SourceControlUpdateParameters

The parameters supplied to the update source control operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SourceControlUpdateProperties**](SourceControlUpdateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_control_update_parameters import SourceControlUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlUpdateParameters from a JSON string
source_control_update_parameters_instance = SourceControlUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SourceControlUpdateParameters.to_json())

# convert the object into a dict
source_control_update_parameters_dict = source_control_update_parameters_instance.to_dict()
# create an instance of SourceControlUpdateParameters from a dict
source_control_update_parameters_from_dict = SourceControlUpdateParameters.from_dict(source_control_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


