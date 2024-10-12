# ResponseAttributeListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**attribute** | [**List[StoreAttribute]**](StoreAttribute.md) |  | [optional] 
**attributes_count** | **int** |  | [optional] 
**custom_fields** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.response_attribute_list_result import ResponseAttributeListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseAttributeListResult from a JSON string
response_attribute_list_result_instance = ResponseAttributeListResult.from_json(json)
# print the JSON string representation of the object
print(ResponseAttributeListResult.to_json())

# convert the object into a dict
response_attribute_list_result_dict = response_attribute_list_result_instance.to_dict()
# create an instance of ResponseAttributeListResult from a dict
response_attribute_list_result_from_dict = ResponseAttributeListResult.from_dict(response_attribute_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


