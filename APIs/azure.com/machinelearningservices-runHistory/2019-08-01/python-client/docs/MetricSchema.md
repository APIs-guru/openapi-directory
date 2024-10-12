# MetricSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_properties** | **int** |  | [optional] 
**properties** | [**List[MetricSchemaProperty]**](MetricSchemaProperty.md) |  | [optional] 

## Example

```python
from openapi_client.models.metric_schema import MetricSchema

# TODO update the JSON string below
json = "{}"
# create an instance of MetricSchema from a JSON string
metric_schema_instance = MetricSchema.from_json(json)
# print the JSON string representation of the object
print(MetricSchema.to_json())

# convert the object into a dict
metric_schema_dict = metric_schema_instance.to_dict()
# create an instance of MetricSchema from a dict
metric_schema_from_dict = MetricSchema.from_dict(metric_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


