# ConsumerSourceDataSetProperties

Properties of consumer source dataSet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_id** | **str** | DataSet Id | [optional] [readonly] 
**data_set_location** | **str** | Location of the data set. | [optional] [readonly] 
**data_set_name** | **str** | DataSet name | [optional] [readonly] 
**data_set_path** | **str** | DataSet path | [optional] [readonly] 
**data_set_type** | **str** | Type of data set | [optional] [readonly] 

## Example

```python
from openapi_client.models.consumer_source_data_set_properties import ConsumerSourceDataSetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerSourceDataSetProperties from a JSON string
consumer_source_data_set_properties_instance = ConsumerSourceDataSetProperties.from_json(json)
# print the JSON string representation of the object
print(ConsumerSourceDataSetProperties.to_json())

# convert the object into a dict
consumer_source_data_set_properties_dict = consumer_source_data_set_properties_instance.to_dict()
# create an instance of ConsumerSourceDataSetProperties from a dict
consumer_source_data_set_properties_from_dict = ConsumerSourceDataSetProperties.from_dict(consumer_source_data_set_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


