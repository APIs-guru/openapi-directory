# OperationListByTags200Response

Paged Tag list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[OperationListByTags200ResponseValueInner]**](OperationListByTags200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.operation_list_by_tags200_response import OperationListByTags200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OperationListByTags200Response from a JSON string
operation_list_by_tags200_response_instance = OperationListByTags200Response.from_json(json)
# print the JSON string representation of the object
print(OperationListByTags200Response.to_json())

# convert the object into a dict
operation_list_by_tags200_response_dict = operation_list_by_tags200_response_instance.to_dict()
# create an instance of OperationListByTags200Response from a dict
operation_list_by_tags200_response_from_dict = OperationListByTags200Response.from_dict(operation_list_by_tags200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


