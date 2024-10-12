# UpdateSystemModelsBundle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Default Value: false. During the creation of the Bundle, this field must be false. | [optional] 
**bundle_id** | **str** | Read-Only. | [optional] 
**bundle_number** | **int** | The bundle number | 
**description** | **str** | The Bundle description. | 
**update_group_id** | **str** | The update group this bundle belongs to. | 

## Example

```python
from openapi_client.models.update_system_models_bundle import UpdateSystemModelsBundle

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsBundle from a JSON string
update_system_models_bundle_instance = UpdateSystemModelsBundle.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsBundle.to_json())

# convert the object into a dict
update_system_models_bundle_dict = update_system_models_bundle_instance.to_dict()
# create an instance of UpdateSystemModelsBundle from a dict
update_system_models_bundle_from_dict = UpdateSystemModelsBundle.from_dict(update_system_models_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


