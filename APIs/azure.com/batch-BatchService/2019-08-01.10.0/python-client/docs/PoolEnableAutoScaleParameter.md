# PoolEnableAutoScaleParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_scale_evaluation_interval** | **str** | The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If you specify a new interval, then the existing autoscale evaluation schedule will be stopped and a new autoscale evaluation schedule will be started, with its starting time being the time when this request was issued. | [optional] 
**auto_scale_formula** | **str** | The formula is checked for validity before it is applied to the Pool. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling). | [optional] 

## Example

```python
from openapi_client.models.pool_enable_auto_scale_parameter import PoolEnableAutoScaleParameter

# TODO update the JSON string below
json = "{}"
# create an instance of PoolEnableAutoScaleParameter from a JSON string
pool_enable_auto_scale_parameter_instance = PoolEnableAutoScaleParameter.from_json(json)
# print the JSON string representation of the object
print(PoolEnableAutoScaleParameter.to_json())

# convert the object into a dict
pool_enable_auto_scale_parameter_dict = pool_enable_auto_scale_parameter_instance.to_dict()
# create an instance of PoolEnableAutoScaleParameter from a dict
pool_enable_auto_scale_parameter_from_dict = PoolEnableAutoScaleParameter.from_dict(pool_enable_auto_scale_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


