# ManagedApi

The managed api definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiResourceProperties**](ApiResourceProperties.md) |  | [optional] 
**id** | **str** | The resource id. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] 
**name** | **str** | Gets the resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | Gets the resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_api import ManagedApi

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedApi from a JSON string
managed_api_instance = ManagedApi.from_json(json)
# print the JSON string representation of the object
print(ManagedApi.to_json())

# convert the object into a dict
managed_api_dict = managed_api_instance.to_dict()
# create an instance of ManagedApi from a dict
managed_api_from_dict = ManagedApi.from_dict(managed_api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


