# DatafeedStatusExample

An example occurrence for a particular error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **str** | The ID of the example item. | [optional] 
**line_number** | **str** | Line number in the data feed where the example is found. | [optional] 
**value** | **str** | The problematic value. | [optional] 

## Example

```python
from openapi_client.models.datafeed_status_example import DatafeedStatusExample

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedStatusExample from a JSON string
datafeed_status_example_instance = DatafeedStatusExample.from_json(json)
# print the JSON string representation of the object
print(DatafeedStatusExample.to_json())

# convert the object into a dict
datafeed_status_example_dict = datafeed_status_example_instance.to_dict()
# create an instance of DatafeedStatusExample from a dict
datafeed_status_example_from_dict = DatafeedStatusExample.from_dict(datafeed_status_example_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


