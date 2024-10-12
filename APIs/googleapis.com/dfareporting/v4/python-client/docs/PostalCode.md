# PostalCode

Contains information about a postal code that can be targeted by ads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Postal code. This is equivalent to the id field. | [optional] 
**country_code** | **str** | Country code of the country to which this postal code belongs. | [optional] 
**country_dart_id** | **str** | DART ID of the country to which this postal code belongs. | [optional] 
**id** | **str** | ID of this postal code. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#postalCode\&quot;. | [optional] 

## Example

```python
from openapi_client.models.postal_code import PostalCode

# TODO update the JSON string below
json = "{}"
# create an instance of PostalCode from a JSON string
postal_code_instance = PostalCode.from_json(json)
# print the JSON string representation of the object
print(PostalCode.to_json())

# convert the object into a dict
postal_code_dict = postal_code_instance.to_dict()
# create an instance of PostalCode from a dict
postal_code_from_dict = PostalCode.from_dict(postal_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


