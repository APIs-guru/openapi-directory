# ClassicMobileService

A mobile service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.classic_mobile_service import ClassicMobileService

# TODO update the JSON string below
json = "{}"
# create an instance of ClassicMobileService from a JSON string
classic_mobile_service_instance = ClassicMobileService.from_json(json)
# print the JSON string representation of the object
print(ClassicMobileService.to_json())

# convert the object into a dict
classic_mobile_service_dict = classic_mobile_service_instance.to_dict()
# create an instance of ClassicMobileService from a dict
classic_mobile_service_from_dict = ClassicMobileService.from_dict(classic_mobile_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


