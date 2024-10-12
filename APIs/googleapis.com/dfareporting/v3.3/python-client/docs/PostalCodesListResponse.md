# PostalCodesListResponse

Postal Code List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#postalCodesListResponse\&quot;. | [optional] 
**postal_codes** | [**List[PostalCode]**](PostalCode.md) | Postal code collection. | [optional] 

## Example

```python
from openapi_client.models.postal_codes_list_response import PostalCodesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PostalCodesListResponse from a JSON string
postal_codes_list_response_instance = PostalCodesListResponse.from_json(json)
# print the JSON string representation of the object
print(PostalCodesListResponse.to_json())

# convert the object into a dict
postal_codes_list_response_dict = postal_codes_list_response_instance.to_dict()
# create an instance of PostalCodesListResponse from a dict
postal_codes_list_response_from_dict = PostalCodesListResponse.from_dict(postal_codes_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


