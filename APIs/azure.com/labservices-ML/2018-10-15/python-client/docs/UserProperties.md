# UserProperties

Lab User properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The user email address, as it was specified during registration. | [optional] [readonly] 
**family_name** | **str** | The user family name, as it was specified during registration. | [optional] [readonly] 
**given_name** | **str** | The user given name, as it was specified during registration. | [optional] [readonly] 
**latest_operation_result** | [**LatestOperationResult**](LatestOperationResult.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**tenant_id** | **str** | The user tenant ID, as it was specified during registration. | [optional] [readonly] 
**total_usage** | **str** | How long the user has used his VMs in this lab | [optional] [readonly] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 

## Example

```python
from openapi_client.models.user_properties import UserProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UserProperties from a JSON string
user_properties_instance = UserProperties.from_json(json)
# print the JSON string representation of the object
print(UserProperties.to_json())

# convert the object into a dict
user_properties_dict = user_properties_instance.to_dict()
# create an instance of UserProperties from a dict
user_properties_from_dict = UserProperties.from_dict(user_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


