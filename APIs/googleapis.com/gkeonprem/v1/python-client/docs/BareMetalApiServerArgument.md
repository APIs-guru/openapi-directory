# BareMetalApiServerArgument

Represents an arg name->value pair. Only a subset of customized flags are supported. For the exact format, refer to the [API server documentation](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**argument** | **str** | Required. The argument name as it appears on the API Server command line, make sure to remove the leading dashes. | [optional] 
**value** | **str** | Required. The value of the arg as it will be passed to the API Server command line. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_api_server_argument import BareMetalApiServerArgument

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalApiServerArgument from a JSON string
bare_metal_api_server_argument_instance = BareMetalApiServerArgument.from_json(json)
# print the JSON string representation of the object
print(BareMetalApiServerArgument.to_json())

# convert the object into a dict
bare_metal_api_server_argument_dict = bare_metal_api_server_argument_instance.to_dict()
# create an instance of BareMetalApiServerArgument from a dict
bare_metal_api_server_argument_from_dict = BareMetalApiServerArgument.from_dict(bare_metal_api_server_argument_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


