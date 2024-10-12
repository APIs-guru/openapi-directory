# GenericPlatformDetails

Generic platform details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Free text representation of the machine location. The format of this field should not be relied on. Different VMs in the same location may have different string values for this field. | [optional] 

## Example

```python
from openapi_client.models.generic_platform_details import GenericPlatformDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GenericPlatformDetails from a JSON string
generic_platform_details_instance = GenericPlatformDetails.from_json(json)
# print the JSON string representation of the object
print(GenericPlatformDetails.to_json())

# convert the object into a dict
generic_platform_details_dict = generic_platform_details_instance.to_dict()
# create an instance of GenericPlatformDetails from a dict
generic_platform_details_from_dict = GenericPlatformDetails.from_dict(generic_platform_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


