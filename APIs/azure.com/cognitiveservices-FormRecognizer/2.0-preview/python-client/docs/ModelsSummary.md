# ModelsSummary

Summary of all trained custom models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Current count of trained custom models. | 
**last_updated_date_time** | **datetime** | Date and time (UTC) when the summary was last updated. | 
**limit** | **int** | Max number of models that can be trained for this subscription. | 

## Example

```python
from openapi_client.models.models_summary import ModelsSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsSummary from a JSON string
models_summary_instance = ModelsSummary.from_json(json)
# print the JSON string representation of the object
print(ModelsSummary.to_json())

# convert the object into a dict
models_summary_dict = models_summary_instance.to_dict()
# create an instance of ModelsSummary from a dict
models_summary_from_dict = ModelsSummary.from_dict(models_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


