# ServiceInputOutputSpecification

The swagger 2.0 schema describing the service's inputs or outputs. See Swagger specification: http://swagger.io/specification/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the Swagger schema. | [optional] 
**properties** | [**Dict[str, TableSpecification]**](TableSpecification.md) | Specifies a collection that contains the column schema for each input or output of the web service. For more information, see the Swagger specification. | 
**title** | **str** | The title of your Swagger schema. | [optional] 
**type** | **str** | The type of the entity described in swagger. Always &#39;object&#39;. | [default to 'object']

## Example

```python
from openapi_client.models.service_input_output_specification import ServiceInputOutputSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceInputOutputSpecification from a JSON string
service_input_output_specification_instance = ServiceInputOutputSpecification.from_json(json)
# print the JSON string representation of the object
print(ServiceInputOutputSpecification.to_json())

# convert the object into a dict
service_input_output_specification_dict = service_input_output_specification_instance.to_dict()
# create an instance of ServiceInputOutputSpecification from a dict
service_input_output_specification_from_dict = ServiceInputOutputSpecification.from_dict(service_input_output_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


