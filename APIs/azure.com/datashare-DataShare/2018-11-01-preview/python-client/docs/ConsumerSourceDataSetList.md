# ConsumerSourceDataSetList

A consumer side list of source dataSets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The Url of next result page. | [optional] 
**value** | [**List[ConsumerSourceDataSet]**](ConsumerSourceDataSet.md) | Collection of items of type DataTransferObjects. | 

## Example

```python
from openapi_client.models.consumer_source_data_set_list import ConsumerSourceDataSetList

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerSourceDataSetList from a JSON string
consumer_source_data_set_list_instance = ConsumerSourceDataSetList.from_json(json)
# print the JSON string representation of the object
print(ConsumerSourceDataSetList.to_json())

# convert the object into a dict
consumer_source_data_set_list_dict = consumer_source_data_set_list_instance.to_dict()
# create an instance of ConsumerSourceDataSetList from a dict
consumer_source_data_set_list_from_dict = ConsumerSourceDataSetList.from_dict(consumer_source_data_set_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


