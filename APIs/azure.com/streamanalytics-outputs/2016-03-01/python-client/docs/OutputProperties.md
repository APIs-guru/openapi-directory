# OutputProperties

The properties that are associated with an output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datasource** | [**OutputDataSource**](OutputDataSource.md) |  | [optional] 
**diagnostics** | [**OutputPropertiesDiagnostics**](OutputPropertiesDiagnostics.md) |  | [optional] 
**etag** | **str** | The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. | [optional] [readonly] 
**serialization** | [**OutputPropertiesSerialization**](OutputPropertiesSerialization.md) |  | [optional] 

## Example

```python
from openapi_client.models.output_properties import OutputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OutputProperties from a JSON string
output_properties_instance = OutputProperties.from_json(json)
# print the JSON string representation of the object
print(OutputProperties.to_json())

# convert the object into a dict
output_properties_dict = output_properties_instance.to_dict()
# create an instance of OutputProperties from a dict
output_properties_from_dict = OutputProperties.from_dict(output_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


