# OperationListByTags200ResponseValueInnerProperties

TagResource contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | [**OperationListByTags200ResponseValueInnerPropertiesApi**](OperationListByTags200ResponseValueInnerPropertiesApi.md) |  | [optional] 
**operation** | [**OperationListByTags200ResponseValueInnerPropertiesOperation**](OperationListByTags200ResponseValueInnerPropertiesOperation.md) |  | [optional] 
**product** | [**OperationListByTags200ResponseValueInnerPropertiesProduct**](OperationListByTags200ResponseValueInnerPropertiesProduct.md) |  | [optional] 
**tag** | [**OperationListByTags200ResponseValueInnerPropertiesTag**](OperationListByTags200ResponseValueInnerPropertiesTag.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_list_by_tags200_response_value_inner_properties import OperationListByTags200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationListByTags200ResponseValueInnerProperties from a JSON string
operation_list_by_tags200_response_value_inner_properties_instance = OperationListByTags200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(OperationListByTags200ResponseValueInnerProperties.to_json())

# convert the object into a dict
operation_list_by_tags200_response_value_inner_properties_dict = operation_list_by_tags200_response_value_inner_properties_instance.to_dict()
# create an instance of OperationListByTags200ResponseValueInnerProperties from a dict
operation_list_by_tags200_response_value_inner_properties_from_dict = OperationListByTags200ResponseValueInnerProperties.from_dict(operation_list_by_tags200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


