# UpdateSystemModelsCheckinResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packages** | [**List[UpdateSystemModelsPackage]**](UpdateSystemModelsPackage.md) | The packages for the client to run. | [optional] 
**remove_packages** | **List[str]** | The package ids for the client to remove. | [optional] 

## Example

```python
from openapi_client.models.update_system_models_checkin_result import UpdateSystemModelsCheckinResult

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsCheckinResult from a JSON string
update_system_models_checkin_result_instance = UpdateSystemModelsCheckinResult.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsCheckinResult.to_json())

# convert the object into a dict
update_system_models_checkin_result_dict = update_system_models_checkin_result_instance.to_dict()
# create an instance of UpdateSystemModelsCheckinResult from a dict
update_system_models_checkin_result_from_dict = UpdateSystemModelsCheckinResult.from_dict(update_system_models_checkin_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


