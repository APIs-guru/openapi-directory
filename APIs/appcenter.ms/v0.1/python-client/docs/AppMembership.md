# AppMembership


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | [optional] 
**origin** | **str** |  | [optional] 
**permissions** | **List[str]** |  | [optional] 
**source_id** | **str** |  | [optional] 
**source_type** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.app_membership import AppMembership

# TODO update the JSON string below
json = "{}"
# create an instance of AppMembership from a JSON string
app_membership_instance = AppMembership.from_json(json)
# print the JSON string representation of the object
print(AppMembership.to_json())

# convert the object into a dict
app_membership_dict = app_membership_instance.to_dict()
# create an instance of AppMembership from a dict
app_membership_from_dict = AppMembership.from_dict(app_membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


