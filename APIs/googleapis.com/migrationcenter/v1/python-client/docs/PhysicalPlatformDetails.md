# PhysicalPlatformDetails

Platform specific details for Physical Machines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Free text representation of the machine location. The format of this field should not be relied on. Different machines in the same location may have different string values for this field. | [optional] 

## Example

```python
from openapi_client.models.physical_platform_details import PhysicalPlatformDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PhysicalPlatformDetails from a JSON string
physical_platform_details_instance = PhysicalPlatformDetails.from_json(json)
# print the JSON string representation of the object
print(PhysicalPlatformDetails.to_json())

# convert the object into a dict
physical_platform_details_dict = physical_platform_details_instance.to_dict()
# create an instance of PhysicalPlatformDetails from a dict
physical_platform_details_from_dict = PhysicalPlatformDetails.from_dict(physical_platform_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


