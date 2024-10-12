# PostalCodeRange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postal_code_range_begin** | **str** | A postal code or a pattern of the form &#x60;prefix*&#x60; denoting the inclusive lower bound of the range defining the area. Examples values: &#x60;\&quot;94108\&quot;&#x60;, &#x60;\&quot;9410*\&quot;&#x60;, &#x60;\&quot;9*\&quot;&#x60;. Required. | [optional] 
**postal_code_range_end** | **str** | A postal code or a pattern of the form &#x60;prefix*&#x60; denoting the inclusive upper bound of the range defining the area. It must have the same length as &#x60;postalCodeRangeBegin&#x60;: if &#x60;postalCodeRangeBegin&#x60; is a postal code then &#x60;postalCodeRangeEnd&#x60; must be a postal code too; if &#x60;postalCodeRangeBegin&#x60; is a pattern then &#x60;postalCodeRangeEnd&#x60; must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching &#x60;postalCodeRangeBegin&#x60;. | [optional] 

## Example

```python
from openapi_client.models.postal_code_range import PostalCodeRange

# TODO update the JSON string below
json = "{}"
# create an instance of PostalCodeRange from a JSON string
postal_code_range_instance = PostalCodeRange.from_json(json)
# print the JSON string representation of the object
print(PostalCodeRange.to_json())

# convert the object into a dict
postal_code_range_dict = postal_code_range_instance.to_dict()
# create an instance of PostalCodeRange from a dict
postal_code_range_from_dict = PostalCodeRange.from_dict(postal_code_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


