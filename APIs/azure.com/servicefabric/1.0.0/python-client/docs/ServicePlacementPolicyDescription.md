# ServicePlacementPolicyDescription

The description of the service placement policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.service_placement_policy_description import ServicePlacementPolicyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServicePlacementPolicyDescription from a JSON string
service_placement_policy_description_instance = ServicePlacementPolicyDescription.from_json(json)
# print the JSON string representation of the object
print(ServicePlacementPolicyDescription.to_json())

# convert the object into a dict
service_placement_policy_description_dict = service_placement_policy_description_instance.to_dict()
# create an instance of ServicePlacementPolicyDescription from a dict
service_placement_policy_description_from_dict = ServicePlacementPolicyDescription.from_dict(service_placement_policy_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


