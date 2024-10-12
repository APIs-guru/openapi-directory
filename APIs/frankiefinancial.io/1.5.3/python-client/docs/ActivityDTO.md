# ActivityDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**description** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.activity_dto import ActivityDTO

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityDTO from a JSON string
activity_dto_instance = ActivityDTO.from_json(json)
# print the JSON string representation of the object
print(ActivityDTO.to_json())

# convert the object into a dict
activity_dto_dict = activity_dto_instance.to_dict()
# create an instance of ActivityDTO from a dict
activity_dto_from_dict = ActivityDTO.from_dict(activity_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


