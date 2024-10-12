# PostalCodeGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The CLDR territory code of the country the postal code group applies to. Required. | [optional] 
**name** | **str** | The name of the postal code group, referred to in headers. Required. | [optional] 
**postal_code_ranges** | [**List[PostalCodeRange]**](PostalCodeRange.md) | A range of postal codes. Required. | [optional] 

## Example

```python
from openapi_client.models.postal_code_group import PostalCodeGroup

# TODO update the JSON string below
json = "{}"
# create an instance of PostalCodeGroup from a JSON string
postal_code_group_instance = PostalCodeGroup.from_json(json)
# print the JSON string representation of the object
print(PostalCodeGroup.to_json())

# convert the object into a dict
postal_code_group_dict = postal_code_group_instance.to_dict()
# create an instance of PostalCodeGroup from a dict
postal_code_group_from_dict = PostalCodeGroup.from_dict(postal_code_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


