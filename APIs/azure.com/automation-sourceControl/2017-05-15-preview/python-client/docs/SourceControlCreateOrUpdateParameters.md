# SourceControlCreateOrUpdateParameters

The parameters supplied to the create or update source control operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SourceControlCreateOrUpdateProperties**](SourceControlCreateOrUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.source_control_create_or_update_parameters import SourceControlCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlCreateOrUpdateParameters from a JSON string
source_control_create_or_update_parameters_instance = SourceControlCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SourceControlCreateOrUpdateParameters.to_json())

# convert the object into a dict
source_control_create_or_update_parameters_dict = source_control_create_or_update_parameters_instance.to_dict()
# create an instance of SourceControlCreateOrUpdateParameters from a dict
source_control_create_or_update_parameters_from_dict = SourceControlCreateOrUpdateParameters.from_dict(source_control_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


