# PatchedWebService

Instance of an Patched Azure ML web service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WebServiceProperties**](WebServiceProperties.md) |  | [optional] 
**id** | **str** | Specifies the resource ID. | [optional] [readonly] 
**location** | **str** | Specifies the location of the resource. | [optional] [readonly] 
**name** | **str** | Specifies the name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Contains resource tags defined as key/value pairs. | [optional] 
**type** | **str** | Specifies the type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.patched_web_service import PatchedWebService

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedWebService from a JSON string
patched_web_service_instance = PatchedWebService.from_json(json)
# print the JSON string representation of the object
print(PatchedWebService.to_json())

# convert the object into a dict
patched_web_service_dict = patched_web_service_instance.to_dict()
# create an instance of PatchedWebService from a dict
patched_web_service_from_dict = PatchedWebService.from_dict(patched_web_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


