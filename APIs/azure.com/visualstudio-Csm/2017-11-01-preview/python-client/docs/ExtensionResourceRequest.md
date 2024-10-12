# ExtensionResourceRequest

The body of an extension resource PUT request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The Azure region of the Visual Studio account associated with this request (i.e &#39;southcentralus&#39;.) | [optional] 
**plan** | [**ExtensionResourcePlan**](ExtensionResourcePlan.md) |  | [optional] 
**properties** | **Dict[str, str]** | A dictionary of extended properties. This property is currently unused. | [optional] 
**tags** | **Dict[str, str]** | A dictionary of user-defined tags to be stored with the extension resource. | [optional] 

## Example

```python
from openapi_client.models.extension_resource_request import ExtensionResourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionResourceRequest from a JSON string
extension_resource_request_instance = ExtensionResourceRequest.from_json(json)
# print the JSON string representation of the object
print(ExtensionResourceRequest.to_json())

# convert the object into a dict
extension_resource_request_dict = extension_resource_request_instance.to_dict()
# create an instance of ExtensionResourceRequest from a dict
extension_resource_request_from_dict = ExtensionResourceRequest.from_dict(extension_resource_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


