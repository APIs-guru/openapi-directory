# OperationListByTags200ResponseValueInner

TagResource contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | [**OperationListByTags200ResponseValueInnerApi**](OperationListByTags200ResponseValueInnerApi.md) |  | [optional] 
**operation** | [**OperationListByTags200ResponseValueInnerOperation**](OperationListByTags200ResponseValueInnerOperation.md) |  | [optional] 
**product** | [**OperationListByTags200ResponseValueInnerProduct**](OperationListByTags200ResponseValueInnerProduct.md) |  | [optional] 
**tag** | [**OperationListByTags200ResponseValueInnerTag**](OperationListByTags200ResponseValueInnerTag.md) |  | 

## Example

```python
from openapi_client.models.operation_list_by_tags200_response_value_inner import OperationListByTags200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of OperationListByTags200ResponseValueInner from a JSON string
operation_list_by_tags200_response_value_inner_instance = OperationListByTags200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(OperationListByTags200ResponseValueInner.to_json())

# convert the object into a dict
operation_list_by_tags200_response_value_inner_dict = operation_list_by_tags200_response_value_inner_instance.to_dict()
# create an instance of OperationListByTags200ResponseValueInner from a dict
operation_list_by_tags200_response_value_inner_from_dict = OperationListByTags200ResponseValueInner.from_dict(operation_list_by_tags200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


