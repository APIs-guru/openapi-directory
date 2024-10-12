# DataLabel

Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_label_data** | [**ChartData**](ChartData.md) |  | [optional] 
**placement** | **str** | The placement of the data label relative to the labeled data. | [optional] 
**text_format** | [**TextFormat**](TextFormat.md) |  | [optional] 
**type** | **str** | The type of the data label. | [optional] 

## Example

```python
from openapi_client.models.data_label import DataLabel

# TODO update the JSON string below
json = "{}"
# create an instance of DataLabel from a JSON string
data_label_instance = DataLabel.from_json(json)
# print the JSON string representation of the object
print(DataLabel.to_json())

# convert the object into a dict
data_label_dict = data_label_instance.to_dict()
# create an instance of DataLabel from a dict
data_label_from_dict = DataLabel.from_dict(data_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


