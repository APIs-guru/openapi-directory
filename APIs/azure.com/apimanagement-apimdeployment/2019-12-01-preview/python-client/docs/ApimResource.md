# ApimResource

The Resource definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type for API Management resource is set to Microsoft.ApiManagement. | [optional] [readonly] 

## Example

```python
from openapi_client.models.apim_resource import ApimResource

# TODO update the JSON string below
json = "{}"
# create an instance of ApimResource from a JSON string
apim_resource_instance = ApimResource.from_json(json)
# print the JSON string representation of the object
print(ApimResource.to_json())

# convert the object into a dict
apim_resource_dict = apim_resource_instance.to_dict()
# create an instance of ApimResource from a dict
apim_resource_from_dict = ApimResource.from_dict(apim_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


