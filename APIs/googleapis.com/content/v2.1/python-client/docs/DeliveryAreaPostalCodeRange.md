# DeliveryAreaPostalCodeRange

A range of postal codes that defines the delivery area. Only set `firstPostalCode` when specifying a single postal code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_postal_code** | **str** | Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: &#x60;\&quot;94108\&quot;&#x60;, &#x60;\&quot;9410*\&quot;&#x60;, &#x60;\&quot;9*\&quot;&#x60;. | [optional] 
**last_postal_code** | **str** | A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area (for example [070* - 078*] results in the range [07000 - 07899]). It must have the same length as &#x60;firstPostalCode&#x60;: if &#x60;firstPostalCode&#x60; is a postal code then &#x60;lastPostalCode&#x60; must be a postal code too; if firstPostalCode is a pattern then &#x60;lastPostalCode&#x60; must be a pattern with the same prefix length. Ignored if not set, then the area is defined as being all the postal codes matching &#x60;firstPostalCode&#x60;. | [optional] 

## Example

```python
from openapi_client.models.delivery_area_postal_code_range import DeliveryAreaPostalCodeRange

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryAreaPostalCodeRange from a JSON string
delivery_area_postal_code_range_instance = DeliveryAreaPostalCodeRange.from_json(json)
# print the JSON string representation of the object
print(DeliveryAreaPostalCodeRange.to_json())

# convert the object into a dict
delivery_area_postal_code_range_dict = delivery_area_postal_code_range_instance.to_dict()
# create an instance of DeliveryAreaPostalCodeRange from a dict
delivery_area_postal_code_range_from_dict = DeliveryAreaPostalCodeRange.from_dict(delivery_area_postal_code_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


