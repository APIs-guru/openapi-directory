# ParseAddressRequestBody

The only required field is `text`, which is the text to be parsed. You can optionally also provide an `address` containing already-known values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**PartialAddress**](PartialAddress.md) | You can optionally provide any already-known address values. For example, you may already know the recipient&#39;s name, city, and country, and only want to parse the street address into separate lines.  | [optional] 
**text** | **str** | The unstructured text that contains address-related entities | 

## Example

```python
from openapi_client.models.parse_address_request_body import ParseAddressRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ParseAddressRequestBody from a JSON string
parse_address_request_body_instance = ParseAddressRequestBody.from_json(json)
# print the JSON string representation of the object
print(ParseAddressRequestBody.to_json())

# convert the object into a dict
parse_address_request_body_dict = parse_address_request_body_instance.to_dict()
# create an instance of ParseAddressRequestBody from a dict
parse_address_request_body_from_dict = ParseAddressRequestBody.from_dict(parse_address_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


