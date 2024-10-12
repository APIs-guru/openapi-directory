# PostalAddress

Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_lines** | **List[str]** | Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. \&quot;Austin, TX\&quot;), it is important that the line order is clear. The order of address lines should be \&quot;envelope order\&quot; for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. \&quot;ja\&quot; for large-to-small ordering and \&quot;ja-Latn\&quot; or \&quot;en\&quot; for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas). | [optional] 
**administrative_area** | **str** | Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. \&quot;Barcelona\&quot; and not \&quot;Catalonia\&quot;). Many countries don&#39;t use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated. | [optional] 
**language_code** | **str** | Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address&#39; country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: \&quot;zh-Hant\&quot;, \&quot;ja\&quot;, \&quot;ja-Latn\&quot;, \&quot;en\&quot;. | [optional] 
**locality** | **str** | Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines. | [optional] 
**organization** | **str** | Optional. The name of the organization at the address. | [optional] 
**postal_code** | **str** | Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.). | [optional] 
**recipients** | **List[str]** | Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain \&quot;care of\&quot; information. | [optional] 
**region_code** | **str** | Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: \&quot;CH\&quot; for Switzerland. | [optional] 
**revision** | **int** | The schema revision of the &#x60;PostalAddress&#x60;. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. | [optional] 
**sorting_code** | **str** | Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like \&quot;CEDEX\&quot;, optionally followed by a number (e.g. \&quot;CEDEX 7\&quot;), or just a number alone, representing the \&quot;sector code\&quot; (Jamaica), \&quot;delivery area indicator\&quot; (Malawi) or \&quot;post office indicator\&quot; (e.g. Côte d&#39;Ivoire). | [optional] 
**sublocality** | **str** | Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts. | [optional] 

## Example

```python
from openapi_client.models.postal_address import PostalAddress

# TODO update the JSON string below
json = "{}"
# create an instance of PostalAddress from a JSON string
postal_address_instance = PostalAddress.from_json(json)
# print the JSON string representation of the object
print(PostalAddress.to_json())

# convert the object into a dict
postal_address_dict = postal_address_instance.to_dict()
# create an instance of PostalAddress from a dict
postal_address_from_dict = PostalAddress.from_dict(postal_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


