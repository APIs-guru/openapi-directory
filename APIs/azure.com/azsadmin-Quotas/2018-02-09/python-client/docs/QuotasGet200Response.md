# QuotasGet200Response

Holds Compute quota information used to control resource allocation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**QuotasList200ResponseValueInnerProperties**](QuotasList200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.quotas_get200_response import QuotasGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of QuotasGet200Response from a JSON string
quotas_get200_response_instance = QuotasGet200Response.from_json(json)
# print the JSON string representation of the object
print(QuotasGet200Response.to_json())

# convert the object into a dict
quotas_get200_response_dict = quotas_get200_response_instance.to_dict()
# create an instance of QuotasGet200Response from a dict
quotas_get200_response_from_dict = QuotasGet200Response.from_dict(quotas_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


