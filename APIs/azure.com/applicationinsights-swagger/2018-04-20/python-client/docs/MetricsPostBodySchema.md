# MetricsPostBodySchema

A metric request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | An identifier for this query.  Must be unique within the post body of the request.  This identifier will be the &#39;id&#39; property of the response object representing this query. | 
**parameters** | [**MetricsPostBodySchemaParameters**](MetricsPostBodySchemaParameters.md) |  | 

## Example

```python
from openapi_client.models.metrics_post_body_schema import MetricsPostBodySchema

# TODO update the JSON string below
json = "{}"
# create an instance of MetricsPostBodySchema from a JSON string
metrics_post_body_schema_instance = MetricsPostBodySchema.from_json(json)
# print the JSON string representation of the object
print(MetricsPostBodySchema.to_json())

# convert the object into a dict
metrics_post_body_schema_dict = metrics_post_body_schema_instance.to_dict()
# create an instance of MetricsPostBodySchema from a dict
metrics_post_body_schema_from_dict = MetricsPostBodySchema.from_dict(metrics_post_body_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


