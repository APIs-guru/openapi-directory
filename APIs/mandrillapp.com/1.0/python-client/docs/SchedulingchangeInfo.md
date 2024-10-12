# SchedulingchangeInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**from_email** | **str** |  | [optional] 
**send_at** | **str** |  | [optional] 
**subject** | **str** |  | [optional] 
**to** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.schedulingchange_info import SchedulingchangeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SchedulingchangeInfo from a JSON string
schedulingchange_info_instance = SchedulingchangeInfo.from_json(json)
# print the JSON string representation of the object
print(SchedulingchangeInfo.to_json())

# convert the object into a dict
schedulingchange_info_dict = schedulingchange_info_instance.to_dict()
# create an instance of SchedulingchangeInfo from a dict
schedulingchange_info_from_dict = SchedulingchangeInfo.from_dict(schedulingchange_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


