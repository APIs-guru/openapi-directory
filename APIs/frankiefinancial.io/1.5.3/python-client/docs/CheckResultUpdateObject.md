# CheckResultUpdateObject

Details of the status changes to be made to a check result. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_class_ids** | **List[str]** |  | [optional] 
**comment** | **str** |  | 
**status** | [**EnumCheckResultManualStatus**](EnumCheckResultManualStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.check_result_update_object import CheckResultUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of CheckResultUpdateObject from a JSON string
check_result_update_object_instance = CheckResultUpdateObject.from_json(json)
# print the JSON string representation of the object
print(CheckResultUpdateObject.to_json())

# convert the object into a dict
check_result_update_object_dict = check_result_update_object_instance.to_dict()
# create an instance of CheckResultUpdateObject from a dict
check_result_update_object_from_dict = CheckResultUpdateObject.from_dict(check_result_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


