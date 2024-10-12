# CheckNameAvailabilityResultResource

Response for check name availability API. Resource provider will set availability as true | false.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CheckNameAvailabilityResult**](CheckNameAvailabilityResult.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

## Example

```python
from openapi_client.models.check_name_availability_result_resource import CheckNameAvailabilityResultResource

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameAvailabilityResultResource from a JSON string
check_name_availability_result_resource_instance = CheckNameAvailabilityResultResource.from_json(json)
# print the JSON string representation of the object
print(CheckNameAvailabilityResultResource.to_json())

# convert the object into a dict
check_name_availability_result_resource_dict = check_name_availability_result_resource_instance.to_dict()
# create an instance of CheckNameAvailabilityResultResource from a dict
check_name_availability_result_resource_from_dict = CheckNameAvailabilityResultResource.from_dict(check_name_availability_result_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


