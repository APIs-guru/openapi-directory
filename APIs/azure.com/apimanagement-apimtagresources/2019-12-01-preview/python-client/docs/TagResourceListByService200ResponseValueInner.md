# TagResourceListByService200ResponseValueInner

TagResource contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | [**TagResourceListByService200ResponseValueInnerApi**](TagResourceListByService200ResponseValueInnerApi.md) |  | [optional] 
**operation** | [**TagResourceListByService200ResponseValueInnerOperation**](TagResourceListByService200ResponseValueInnerOperation.md) |  | [optional] 
**product** | [**TagResourceListByService200ResponseValueInnerProduct**](TagResourceListByService200ResponseValueInnerProduct.md) |  | [optional] 
**tag** | [**TagResourceListByService200ResponseValueInnerTag**](TagResourceListByService200ResponseValueInnerTag.md) |  | 

## Example

```python
from openapi_client.models.tag_resource_list_by_service200_response_value_inner import TagResourceListByService200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of TagResourceListByService200ResponseValueInner from a JSON string
tag_resource_list_by_service200_response_value_inner_instance = TagResourceListByService200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(TagResourceListByService200ResponseValueInner.to_json())

# convert the object into a dict
tag_resource_list_by_service200_response_value_inner_dict = tag_resource_list_by_service200_response_value_inner_instance.to_dict()
# create an instance of TagResourceListByService200ResponseValueInner from a dict
tag_resource_list_by_service200_response_value_inner_from_dict = TagResourceListByService200ResponseValueInner.from_dict(tag_resource_list_by_service200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


