# AdminMappingsGet200ResponseMappingsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | This stub mapping&#39;s unique identifier | [optional] 
**metadata** | **object** | Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. | [optional] 
**name** | **str** | The stub mapping&#39;s name | [optional] 
**new_scenario_state** | **str** | The new state for the scenario to be updated to after this stub is served. | [optional] 
**persistent** | **bool** | Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. | [optional] 
**post_serve_actions** | **object** | A map of the names of post serve action extensions to trigger and their parameters. | [optional] 
**priority** | **int** | This stub mapping&#39;s priority relative to others. 1 is highest. | [optional] 
**request** | [**AdminMappingsGet200ResponseMappingsInnerRequest**](AdminMappingsGet200ResponseMappingsInnerRequest.md) |  | [optional] 
**required_scenario_state** | **str** | The required state of the scenario in order for this stub to be matched. | [optional] 
**response** | [**AdminMappingsGet200ResponseMappingsInnerResponse**](AdminMappingsGet200ResponseMappingsInnerResponse.md) |  | [optional] 
**scenario_name** | **str** | The name of the scenario that this stub mapping is part of | [optional] 
**uuid** | **str** | Alias for the id | [optional] 

## Example

```python
from openapi_client.models.admin_mappings_get200_response_mappings_inner import AdminMappingsGet200ResponseMappingsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AdminMappingsGet200ResponseMappingsInner from a JSON string
admin_mappings_get200_response_mappings_inner_instance = AdminMappingsGet200ResponseMappingsInner.from_json(json)
# print the JSON string representation of the object
print(AdminMappingsGet200ResponseMappingsInner.to_json())

# convert the object into a dict
admin_mappings_get200_response_mappings_inner_dict = admin_mappings_get200_response_mappings_inner_instance.to_dict()
# create an instance of AdminMappingsGet200ResponseMappingsInner from a dict
admin_mappings_get200_response_mappings_inner_from_dict = AdminMappingsGet200ResponseMappingsInner.from_dict(admin_mappings_get200_response_mappings_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


