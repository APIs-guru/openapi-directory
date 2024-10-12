# APIModelsLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**time_stamp** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.api_models_log import APIModelsLog

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsLog from a JSON string
api_models_log_instance = APIModelsLog.from_json(json)
# print the JSON string representation of the object
print(APIModelsLog.to_json())

# convert the object into a dict
api_models_log_dict = api_models_log_instance.to_dict()
# create an instance of APIModelsLog from a dict
api_models_log_from_dict = APIModelsLog.from_dict(api_models_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


