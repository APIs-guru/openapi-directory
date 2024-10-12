# StreetAddress

RETS MLS Street Address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City name | [optional] 
**country** | **str** | Street address country (United States or Canada) | [optional] 
**cross_street** | **str** | Known cross street | [optional] 
**full** | **str** | Full pretty-printed address with suffix (if available) | [optional] 
**postal_code** | **str** | Street Address postal code | [optional] 
**state** | **str** | State or province. Maps to the data dictionary field &#x60;StateOrProvince&#x60;. | [optional] 
**street_name** | **str** | Name of the street | [optional] 
**street_number** | **int** | Street number | [optional] 
**street_number_text** | **str** | Textual representation of the street number. This field is usually redundant with what&#39;s in &#x60;streetNumber&#x60; but is occassionally usefuly for street number which are actually alpha-numerical. For example, \&quot;N63453\&quot; or \&quot;34556B\&quot;.  **Added on 2016/05/02**  | [optional] 

## Example

```python
from openapi_client.models.street_address import StreetAddress

# TODO update the JSON string below
json = "{}"
# create an instance of StreetAddress from a JSON string
street_address_instance = StreetAddress.from_json(json)
# print the JSON string representation of the object
print(StreetAddress.to_json())

# convert the object into a dict
street_address_dict = street_address_instance.to_dict()
# create an instance of StreetAddress from a dict
street_address_from_dict = StreetAddress.from_dict(street_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


