# AppServicePlansListVnets200ResponseInner

Virtual Network information contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AppServicePlansListVnets200ResponseInnerProperties**](AppServicePlansListVnets200ResponseInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list_vnets200_response_inner import AppServicePlansListVnets200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListVnets200ResponseInner from a JSON string
app_service_plans_list_vnets200_response_inner_instance = AppServicePlansListVnets200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListVnets200ResponseInner.to_json())

# convert the object into a dict
app_service_plans_list_vnets200_response_inner_dict = app_service_plans_list_vnets200_response_inner_instance.to_dict()
# create an instance of AppServicePlansListVnets200ResponseInner from a dict
app_service_plans_list_vnets200_response_inner_from_dict = AppServicePlansListVnets200ResponseInner.from_dict(app_service_plans_list_vnets200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


