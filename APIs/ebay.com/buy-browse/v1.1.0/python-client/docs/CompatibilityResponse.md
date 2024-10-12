# CompatibilityResponse

The type that defines the response fields for <b> checkCompatibility</b>.  

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatibility_status** | **str** | An enumeration value that tells you if the item is compatible with the product. The values are: COMPATIBLE - Indicates the item is compatible with the product specified in the request. NOT_COMPATIBLE - Indicates the item is not compatible with the product specified in the request. Be sure to check all the value fields to ensure they are correct as errors in the value can also cause this response. UNDETERMINED - Indicates one or more attributes for the specified product are missing so compatibility cannot be determined. The response returns the attributes that are missing. Code so that your app gracefully handles any future changes to this list. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/gct:CompatibilityStatus&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**warnings** | [**List[Error]**](Error.md) | An array of warning messages. These types of errors do not prevent the method from executing but should be checked. | [optional] 

## Example

```python
from openapi_client.models.compatibility_response import CompatibilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CompatibilityResponse from a JSON string
compatibility_response_instance = CompatibilityResponse.from_json(json)
# print the JSON string representation of the object
print(CompatibilityResponse.to_json())

# convert the object into a dict
compatibility_response_dict = compatibility_response_instance.to_dict()
# create an instance of CompatibilityResponse from a dict
compatibility_response_from_dict = CompatibilityResponse.from_dict(compatibility_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


