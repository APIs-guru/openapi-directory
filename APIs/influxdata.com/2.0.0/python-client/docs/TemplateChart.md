# TemplateChart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** |  | [optional] 
**properties** | [**ViewProperties**](ViewProperties.md) |  | [optional] 
**width** | **int** |  | [optional] 
**x_pos** | **int** |  | [optional] 
**y_pos** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.template_chart import TemplateChart

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateChart from a JSON string
template_chart_instance = TemplateChart.from_json(json)
# print the JSON string representation of the object
print(TemplateChart.to_json())

# convert the object into a dict
template_chart_dict = template_chart_instance.to_dict()
# create an instance of TemplateChart from a dict
template_chart_from_dict = TemplateChart.from_dict(template_chart_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


