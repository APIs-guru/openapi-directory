# Application


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicant_id** | **str** |  | 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**job_id** | **str** |  | 
**stage** | [**ApplicationStage**](ApplicationStage.md) |  | [optional] 
**status** | **str** |  | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application import Application

# TODO update the JSON string below
json = "{}"
# create an instance of Application from a JSON string
application_instance = Application.from_json(json)
# print the JSON string representation of the object
print(Application.to_json())

# convert the object into a dict
application_dict = application_instance.to_dict()
# create an instance of Application from a dict
application_from_dict = Application.from_dict(application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


