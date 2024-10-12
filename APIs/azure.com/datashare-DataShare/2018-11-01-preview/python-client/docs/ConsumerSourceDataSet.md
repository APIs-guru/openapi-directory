# ConsumerSourceDataSet

A consumer side dataSet data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ConsumerSourceDataSetProperties**](ConsumerSourceDataSetProperties.md) |  | [optional] 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.consumer_source_data_set import ConsumerSourceDataSet

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerSourceDataSet from a JSON string
consumer_source_data_set_instance = ConsumerSourceDataSet.from_json(json)
# print the JSON string representation of the object
print(ConsumerSourceDataSet.to_json())

# convert the object into a dict
consumer_source_data_set_dict = consumer_source_data_set_instance.to_dict()
# create an instance of ConsumerSourceDataSet from a dict
consumer_source_data_set_from_dict = ConsumerSourceDataSet.from_dict(consumer_source_data_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


