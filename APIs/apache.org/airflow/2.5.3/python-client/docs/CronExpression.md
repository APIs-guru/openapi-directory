# CronExpression

Cron expression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.cron_expression import CronExpression

# TODO update the JSON string below
json = "{}"
# create an instance of CronExpression from a JSON string
cron_expression_instance = CronExpression.from_json(json)
# print the JSON string representation of the object
print(CronExpression.to_json())

# convert the object into a dict
cron_expression_dict = cron_expression_instance.to_dict()
# create an instance of CronExpression from a dict
cron_expression_from_dict = CronExpression.from_dict(cron_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


