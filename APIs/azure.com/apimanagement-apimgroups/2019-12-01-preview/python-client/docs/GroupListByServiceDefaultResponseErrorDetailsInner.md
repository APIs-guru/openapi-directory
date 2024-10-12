# GroupListByServiceDefaultResponseErrorDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.group_list_by_service_default_response_error_details_inner import GroupListByServiceDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GroupListByServiceDefaultResponseErrorDetailsInner from a JSON string
group_list_by_service_default_response_error_details_inner_instance = GroupListByServiceDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(GroupListByServiceDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
group_list_by_service_default_response_error_details_inner_dict = group_list_by_service_default_response_error_details_inner_instance.to_dict()
# create an instance of GroupListByServiceDefaultResponseErrorDetailsInner from a dict
group_list_by_service_default_response_error_details_inner_from_dict = GroupListByServiceDefaultResponseErrorDetailsInner.from_dict(group_list_by_service_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


