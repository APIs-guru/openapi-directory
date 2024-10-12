# AtsActivity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ats_activity import AtsActivity

# TODO update the JSON string below
json = "{}"
# create an instance of AtsActivity from a JSON string
ats_activity_instance = AtsActivity.from_json(json)
# print the JSON string representation of the object
print(AtsActivity.to_json())

# convert the object into a dict
ats_activity_dict = ats_activity_instance.to_dict()
# create an instance of AtsActivity from a dict
ats_activity_from_dict = AtsActivity.from_dict(ats_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


