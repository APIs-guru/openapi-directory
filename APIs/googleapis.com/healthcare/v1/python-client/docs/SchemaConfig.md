# SchemaConfig

Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_updated_partition_config** | [**TimePartitioning**](TimePartitioning.md) |  | [optional] 
**recursive_structure_depth** | **str** | The depth for all recursive structures in the output analytics schema. For example, &#x60;concept&#x60; in the CodeSystem resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called &#x60;concept.concept&#x60; but not &#x60;concept.concept.concept&#x60;. If not specified or set to 0, the server will use the default value 2. The maximum depth allowed is 5. | [optional] 
**schema_type** | **str** | Specifies the output schema type. Schema type is required. | [optional] 

## Example

```python
from openapi_client.models.schema_config import SchemaConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaConfig from a JSON string
schema_config_instance = SchemaConfig.from_json(json)
# print the JSON string representation of the object
print(SchemaConfig.to_json())

# convert the object into a dict
schema_config_dict = schema_config_instance.to_dict()
# create an instance of SchemaConfig from a dict
schema_config_from_dict = SchemaConfig.from_dict(schema_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


