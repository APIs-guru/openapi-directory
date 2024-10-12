# ApisListByServiceDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.apis_list_by_service_default_response_details_inner import ApisListByServiceDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApisListByServiceDefaultResponseDetailsInner from a JSON string
apis_list_by_service_default_response_details_inner_instance = ApisListByServiceDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(ApisListByServiceDefaultResponseDetailsInner.to_json())

# convert the object into a dict
apis_list_by_service_default_response_details_inner_dict = apis_list_by_service_default_response_details_inner_instance.to_dict()
# create an instance of ApisListByServiceDefaultResponseDetailsInner from a dict
apis_list_by_service_default_response_details_inner_from_dict = ApisListByServiceDefaultResponseDetailsInner.from_dict(apis_list_by_service_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


