# UsageSample

Describes a sample of the usageAggregation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info_fields** | [**InfoField**](InfoField.md) |  | [optional] 
**instance_data** | **str** | Key-value pairs of instance details represented as a string. | [optional] 
**meter_category** | **str** | Category of the consumed resource. | [optional] 
**meter_id** | **str** | Unique ID for the resource that was consumed (aka ResourceID). | [optional] 
**meter_name** | **str** | Friendly name of the resource being consumed. | [optional] 
**meter_region** | **str** | Region of the meterId used for billing purposes | [optional] 
**meter_sub_category** | **str** | Sub-category of the consumed resource. | [optional] 
**quantity** | **float** | The amount of the resource consumption that occurred in this time frame. | [optional] 
**subscription_id** | **str** | The subscription identifier for the Azure user. | [optional] 
**unit** | **str** | The unit in which the usage for this resource is being counted, e.g. Hours, GB. | [optional] 
**usage_end_time** | **datetime** | UTC end time for the usage bucket to which this usage aggregate belongs. | [optional] 
**usage_start_time** | **datetime** | UTC start time for the usage bucket to which this usage aggregate belongs. | [optional] 

## Example

```python
from openapi_client.models.usage_sample import UsageSample

# TODO update the JSON string below
json = "{}"
# create an instance of UsageSample from a JSON string
usage_sample_instance = UsageSample.from_json(json)
# print the JSON string representation of the object
print(UsageSample.to_json())

# convert the object into a dict
usage_sample_dict = usage_sample_instance.to_dict()
# create an instance of UsageSample from a dict
usage_sample_from_dict = UsageSample.from_dict(usage_sample_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


