# AddressAutocompletePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.address_autocomplete_post_request import AddressAutocompletePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddressAutocompletePostRequest from a JSON string
address_autocomplete_post_request_instance = AddressAutocompletePostRequest.from_json(json)
# print the JSON string representation of the object
print(AddressAutocompletePostRequest.to_json())

# convert the object into a dict
address_autocomplete_post_request_dict = address_autocomplete_post_request_instance.to_dict()
# create an instance of AddressAutocompletePostRequest from a dict
address_autocomplete_post_request_from_dict = AddressAutocompletePostRequest.from_dict(address_autocomplete_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


