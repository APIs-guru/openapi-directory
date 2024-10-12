# CrashingAppDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | application identifier | [optional] 
**app_version** | **str** | application version | [optional] 
**crash_group_id** | **str** | crash group identifier | [optional] 

## Example

```python
from openapi_client.models.crashing_app_detail import CrashingAppDetail

# TODO update the JSON string below
json = "{}"
# create an instance of CrashingAppDetail from a JSON string
crashing_app_detail_instance = CrashingAppDetail.from_json(json)
# print the JSON string representation of the object
print(CrashingAppDetail.to_json())

# convert the object into a dict
crashing_app_detail_dict = crashing_app_detail_instance.to_dict()
# create an instance of CrashingAppDetail from a dict
crashing_app_detail_from_dict = CrashingAppDetail.from_dict(crashing_app_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


