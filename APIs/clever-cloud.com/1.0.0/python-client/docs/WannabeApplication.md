# WannabeApplication


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **bool** |  | [optional] [default to False]
**cancel_on_push** | **bool** |  | [optional] [default to False]
**deploy** | **str** |  | 
**description** | **str** |  | [optional] 
**enabled** | **bool** |  | [default to False]
**favourite** | **bool** |  | [optional] [default to False]
**homogeneous** | **bool** |  | [optional] [default to False]
**instance_type** | **str** |  | [optional] 
**instance_variant** | **str** |  | [optional] 
**instance_version** | **str** |  | [optional] 
**max_flavor** | **str** |  | [optional] 
**max_instances** | **int** |  | 
**min_flavor** | **str** |  | [optional] 
**min_instances** | **int** |  | 
**name** | **str** |  | 
**oauth_app** | [**WannabeOauthApp**](WannabeOauthApp.md) |  | [optional] 
**oauth_app_id** | **str** |  | [optional] 
**oauth_service** | **str** |  | [optional] 
**separate_build** | **bool** |  | [optional] [default to False]
**shutdownable** | **bool** |  | [optional] [default to False]
**sticky_sessions** | **bool** |  | [optional] [default to False]
**tags** | **List[str]** |  | [optional] 
**zone** | **str** |  | 

## Example

```python
from openapi_client.models.wannabe_application import WannabeApplication

# TODO update the JSON string below
json = "{}"
# create an instance of WannabeApplication from a JSON string
wannabe_application_instance = WannabeApplication.from_json(json)
# print the JSON string representation of the object
print(WannabeApplication.to_json())

# convert the object into a dict
wannabe_application_dict = wannabe_application_instance.to_dict()
# create an instance of WannabeApplication from a dict
wannabe_application_from_dict = WannabeApplication.from_dict(wannabe_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


