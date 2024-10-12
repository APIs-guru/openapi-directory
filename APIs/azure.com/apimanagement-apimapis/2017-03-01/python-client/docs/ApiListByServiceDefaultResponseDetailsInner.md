# ApiListByServiceDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.api_list_by_service_default_response_details_inner import ApiListByServiceDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiListByServiceDefaultResponseDetailsInner from a JSON string
api_list_by_service_default_response_details_inner_instance = ApiListByServiceDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(ApiListByServiceDefaultResponseDetailsInner.to_json())

# convert the object into a dict
api_list_by_service_default_response_details_inner_dict = api_list_by_service_default_response_details_inner_instance.to_dict()
# create an instance of ApiListByServiceDefaultResponseDetailsInner from a dict
api_list_by_service_default_response_details_inner_from_dict = ApiListByServiceDefaultResponseDetailsInner.from_dict(api_list_by_service_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


