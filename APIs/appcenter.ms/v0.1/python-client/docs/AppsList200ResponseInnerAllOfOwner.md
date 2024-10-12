# AppsList200ResponseInnerAllOfOwner

The information about the app's owner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **str** | The avatar URL of the owner | [optional] 
**display_name** | **str** | The owner&#39;s display name | 
**email** | **str** | The owner&#39;s email address | [optional] 
**id** | **str** | The unique id (UUID) of the owner | 
**name** | **str** | The unique name that used to identify the owner | 
**type** | **str** | The owner type. Can either be &#39;org&#39; or &#39;user&#39; | 

## Example

```python
from openapi_client.models.apps_list200_response_inner_all_of_owner import AppsList200ResponseInnerAllOfOwner

# TODO update the JSON string below
json = "{}"
# create an instance of AppsList200ResponseInnerAllOfOwner from a JSON string
apps_list200_response_inner_all_of_owner_instance = AppsList200ResponseInnerAllOfOwner.from_json(json)
# print the JSON string representation of the object
print(AppsList200ResponseInnerAllOfOwner.to_json())

# convert the object into a dict
apps_list200_response_inner_all_of_owner_dict = apps_list200_response_inner_all_of_owner_instance.to_dict()
# create an instance of AppsList200ResponseInnerAllOfOwner from a dict
apps_list200_response_inner_all_of_owner_from_dict = AppsList200ResponseInnerAllOfOwner.from_dict(apps_list200_response_inner_all_of_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


