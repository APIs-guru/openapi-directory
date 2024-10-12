# ApplicationTarget

Defines the target resources for a VSTS pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | [**List[TargetResource]**](TargetResource.md) | List of target resources. | 
**target_type** | **str** | Type of target. | 

## Example

```python
from openapi_client.models.application_target import ApplicationTarget

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTarget from a JSON string
application_target_instance = ApplicationTarget.from_json(json)
# print the JSON string representation of the object
print(ApplicationTarget.to_json())

# convert the object into a dict
application_target_dict = application_target_instance.to_dict()
# create an instance of ApplicationTarget from a dict
application_target_from_dict = ApplicationTarget.from_dict(application_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


