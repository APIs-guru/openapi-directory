# Parameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Country Code. | [optional] 
**ecomm** | **str** | Ecommerce indicator. \&quot;yes\&quot; or \&quot;no\&quot; are the options. | [optional] 
**period** | **str** | Indicates the period covered by the data with possible values of - day, week, month, quarter, annual | [optional] 
**product_line** | **str** | Product lines available for the consumer ?US Executive Report? and/or ?US Weekly Gasoline Report?. | [optional] 
**publication_coverage_period** | **str** | Publication Coverage Period indicates what period is to be covered by the current report. | [optional] 
**report_type** | **str** | Report type name, today the only report supported is \&quot;monitor\&quot;. | [optional] 
**sector** | **str** | Sector name/id. | [optional] 

## Example

```python
from openapi_client.models.parameter import Parameter

# TODO update the JSON string below
json = "{}"
# create an instance of Parameter from a JSON string
parameter_instance = Parameter.from_json(json)
# print the JSON string representation of the object
print(Parameter.to_json())

# convert the object into a dict
parameter_dict = parameter_instance.to_dict()
# create an instance of Parameter from a dict
parameter_from_dict = Parameter.from_dict(parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


