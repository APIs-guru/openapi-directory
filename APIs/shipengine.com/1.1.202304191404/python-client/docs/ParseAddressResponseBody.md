# ParseAddressResponseBody

The parsed address, as well as a confidence score and a list of all the entities that were recognized in the text. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**PartialAddress**](PartialAddress.md) | The parsed address.  This address may not be complete, depending on how much information was included in the text and how confident the API is about each recognized entity.  &gt; **Note:** The address-recognition API does not currently perform any validation of the parsed address, so we recommend that you use the [address-validation API](https://www.shipengine.com/docs/addresses/validation/) to ensure that the address is correct.  | 
**entities** | [**List[RecognizedEntity]**](RecognizedEntity.md) | All of the entities that were recognized in the text. An \&quot;entity\&quot; is a single piece of data, such as a city, a postal code, or an address line.  Each entity includes the original text and the parsed value.  | 
**score** | **float** | A confidence score between zero and one that indicates how certain the API is that it understood the text.  | 

## Example

```python
from openapi_client.models.parse_address_response_body import ParseAddressResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ParseAddressResponseBody from a JSON string
parse_address_response_body_instance = ParseAddressResponseBody.from_json(json)
# print the JSON string representation of the object
print(ParseAddressResponseBody.to_json())

# convert the object into a dict
parse_address_response_body_dict = parse_address_response_body_instance.to_dict()
# create an instance of ParseAddressResponseBody from a dict
parse_address_response_body_from_dict = ParseAddressResponseBody.from_dict(parse_address_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


