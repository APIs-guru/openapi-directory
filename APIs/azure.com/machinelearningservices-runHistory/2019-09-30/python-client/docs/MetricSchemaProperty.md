# MetricSchemaProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**property_id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.metric_schema_property import MetricSchemaProperty

# TODO update the JSON string below
json = "{}"
# create an instance of MetricSchemaProperty from a JSON string
metric_schema_property_instance = MetricSchemaProperty.from_json(json)
# print the JSON string representation of the object
print(MetricSchemaProperty.to_json())

# convert the object into a dict
metric_schema_property_dict = metric_schema_property_instance.to_dict()
# create an instance of MetricSchemaProperty from a dict
metric_schema_property_from_dict = MetricSchemaProperty.from_dict(metric_schema_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


