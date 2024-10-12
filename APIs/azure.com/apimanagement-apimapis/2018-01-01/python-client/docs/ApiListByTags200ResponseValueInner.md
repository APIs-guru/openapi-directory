# ApiListByTags200ResponseValueInner

TagResource contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | [**ApiListByTags200ResponseValueInnerApi**](ApiListByTags200ResponseValueInnerApi.md) |  | [optional] 
**operation** | [**ApiListByTags200ResponseValueInnerOperation**](ApiListByTags200ResponseValueInnerOperation.md) |  | [optional] 
**product** | [**ApiListByTags200ResponseValueInnerProduct**](ApiListByTags200ResponseValueInnerProduct.md) |  | [optional] 
**tag** | [**ApiListByTags200ResponseValueInnerTag**](ApiListByTags200ResponseValueInnerTag.md) |  | 

## Example

```python
from openapi_client.models.api_list_by_tags200_response_value_inner import ApiListByTags200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiListByTags200ResponseValueInner from a JSON string
api_list_by_tags200_response_value_inner_instance = ApiListByTags200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(ApiListByTags200ResponseValueInner.to_json())

# convert the object into a dict
api_list_by_tags200_response_value_inner_dict = api_list_by_tags200_response_value_inner_instance.to_dict()
# create an instance of ApiListByTags200ResponseValueInner from a dict
api_list_by_tags200_response_value_inner_from_dict = ApiListByTags200ResponseValueInner.from_dict(api_list_by_tags200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


