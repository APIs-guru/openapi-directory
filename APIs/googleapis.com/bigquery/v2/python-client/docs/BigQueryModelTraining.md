# BigQueryModelTraining


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_iteration** | **int** | Deprecated. | [optional] 
**expected_total_iterations** | **str** | Deprecated. | [optional] 

## Example

```python
from openapi_client.models.big_query_model_training import BigQueryModelTraining

# TODO update the JSON string below
json = "{}"
# create an instance of BigQueryModelTraining from a JSON string
big_query_model_training_instance = BigQueryModelTraining.from_json(json)
# print the JSON string representation of the object
print(BigQueryModelTraining.to_json())

# convert the object into a dict
big_query_model_training_dict = big_query_model_training_instance.to_dict()
# create an instance of BigQueryModelTraining from a dict
big_query_model_training_from_dict = BigQueryModelTraining.from_dict(big_query_model_training_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


