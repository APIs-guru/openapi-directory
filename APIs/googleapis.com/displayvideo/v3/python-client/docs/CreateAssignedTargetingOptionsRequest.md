# CreateAssignedTargetingOptionsRequest

A request listing which assigned targeting options of a given targeting type should be created and added.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_targeting_options** | [**List[AssignedTargetingOption]**](AssignedTargetingOption.md) | Required. The assigned targeting options to create and add. | [optional] 
**targeting_type** | **str** | Required. Identifies the type of this assigned targeting option. | [optional] 

## Example

```python
from openapi_client.models.create_assigned_targeting_options_request import CreateAssignedTargetingOptionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAssignedTargetingOptionsRequest from a JSON string
create_assigned_targeting_options_request_instance = CreateAssignedTargetingOptionsRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAssignedTargetingOptionsRequest.to_json())

# convert the object into a dict
create_assigned_targeting_options_request_dict = create_assigned_targeting_options_request_instance.to_dict()
# create an instance of CreateAssignedTargetingOptionsRequest from a dict
create_assigned_targeting_options_request_from_dict = CreateAssignedTargetingOptionsRequest.from_dict(create_assigned_targeting_options_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


