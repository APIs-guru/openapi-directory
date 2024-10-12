# SchemaRestrictionResponse

The schema restrictions actively enforced in creating this report. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_metric_restrictions** | [**List[ActiveMetricRestriction]**](ActiveMetricRestriction.md) | All restrictions actively enforced in creating the report. For example, &#x60;purchaseRevenue&#x60; always has the restriction type &#x60;REVENUE_DATA&#x60;. However, this active response restriction is only populated if the user&#39;s custom role disallows access to &#x60;REVENUE_DATA&#x60;. | [optional] 

## Example

```python
from openapi_client.models.schema_restriction_response import SchemaRestrictionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaRestrictionResponse from a JSON string
schema_restriction_response_instance = SchemaRestrictionResponse.from_json(json)
# print the JSON string representation of the object
print(SchemaRestrictionResponse.to_json())

# convert the object into a dict
schema_restriction_response_dict = schema_restriction_response_instance.to_dict()
# create an instance of SchemaRestrictionResponse from a dict
schema_restriction_response_from_dict = SchemaRestrictionResponse.from_dict(schema_restriction_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


