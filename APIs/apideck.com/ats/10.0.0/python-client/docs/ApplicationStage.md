# ApplicationStage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Stage the candidate should be in. If omitted, the default stage for this job will be used. | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.application_stage import ApplicationStage

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationStage from a JSON string
application_stage_instance = ApplicationStage.from_json(json)
# print the JSON string representation of the object
print(ApplicationStage.to_json())

# convert the object into a dict
application_stage_dict = application_stage_instance.to_dict()
# create an instance of ApplicationStage from a dict
application_stage_from_dict = ApplicationStage.from_dict(application_stage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


