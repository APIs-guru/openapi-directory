# ApiListByTags200ResponseValueInnerProperties

TagResource contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | [**ApiListByTags200ResponseValueInnerPropertiesApi**](ApiListByTags200ResponseValueInnerPropertiesApi.md) |  | [optional] 
**operation** | [**ApiListByTags200ResponseValueInnerPropertiesOperation**](ApiListByTags200ResponseValueInnerPropertiesOperation.md) |  | [optional] 
**product** | [**ApiProductListByApis200ResponseValueInner**](ApiProductListByApis200ResponseValueInner.md) |  | [optional] 
**tag** | [**ApiListByTags200ResponseValueInnerPropertiesTag**](ApiListByTags200ResponseValueInnerPropertiesTag.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_list_by_tags200_response_value_inner_properties import ApiListByTags200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiListByTags200ResponseValueInnerProperties from a JSON string
api_list_by_tags200_response_value_inner_properties_instance = ApiListByTags200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApiListByTags200ResponseValueInnerProperties.to_json())

# convert the object into a dict
api_list_by_tags200_response_value_inner_properties_dict = api_list_by_tags200_response_value_inner_properties_instance.to_dict()
# create an instance of ApiListByTags200ResponseValueInnerProperties from a dict
api_list_by_tags200_response_value_inner_properties_from_dict = ApiListByTags200ResponseValueInnerProperties.from_dict(api_list_by_tags200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


