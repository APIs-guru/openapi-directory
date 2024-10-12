# RuleDataSource

The resource from which the rule collects its data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource | 
**resource_uri** | **str** | the resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule. | [optional] 

## Example

```python
from openapi_client.models.rule_data_source import RuleDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of RuleDataSource from a JSON string
rule_data_source_instance = RuleDataSource.from_json(json)
# print the JSON string representation of the object
print(RuleDataSource.to_json())

# convert the object into a dict
rule_data_source_dict = rule_data_source_instance.to_dict()
# create an instance of RuleDataSource from a dict
rule_data_source_from_dict = RuleDataSource.from_dict(rule_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


