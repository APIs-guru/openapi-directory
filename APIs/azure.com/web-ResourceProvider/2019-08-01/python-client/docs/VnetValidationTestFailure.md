# VnetValidationTestFailure

A class that describes a test that failed during NSG and UDR validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | VnetValidationTestFailure resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vnet_validation_test_failure import VnetValidationTestFailure

# TODO update the JSON string below
json = "{}"
# create an instance of VnetValidationTestFailure from a JSON string
vnet_validation_test_failure_instance = VnetValidationTestFailure.from_json(json)
# print the JSON string representation of the object
print(VnetValidationTestFailure.to_json())

# convert the object into a dict
vnet_validation_test_failure_dict = vnet_validation_test_failure_instance.to_dict()
# create an instance of VnetValidationTestFailure from a dict
vnet_validation_test_failure_from_dict = VnetValidationTestFailure.from_dict(vnet_validation_test_failure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


