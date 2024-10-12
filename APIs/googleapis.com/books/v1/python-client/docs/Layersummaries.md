# Layersummaries


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Layersummary]**](Layersummary.md) | A list of layer summary items. | [optional] 
**kind** | **str** | Resource type. | [optional] 
**total_items** | **int** | The total number of layer summaries found. | [optional] 

## Example

```python
from openapi_client.models.layersummaries import Layersummaries

# TODO update the JSON string below
json = "{}"
# create an instance of Layersummaries from a JSON string
layersummaries_instance = Layersummaries.from_json(json)
# print the JSON string representation of the object
print(Layersummaries.to_json())

# convert the object into a dict
layersummaries_dict = layersummaries_instance.to_dict()
# create an instance of Layersummaries from a dict
layersummaries_from_dict = Layersummaries.from_dict(layersummaries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


