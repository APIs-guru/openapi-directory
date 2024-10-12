# ListingNestExtraAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dealer_added_f** | **List[str]** | List of dealer added features available with the car | [optional] 
**electronics_f** | **List[str]** | List of electronic features available with the car | [optional] 
**exterior_f** | **List[str]** | List of exterior features available with the car | [optional] 
**features** | **List[str]** | List of Features available with the car | [optional] 
**interior_f** | **List[str]** | List of interior features available with the car | [optional] 
**options** | **List[str]** | Installed Options of the car | [optional] 
**safety_f** | **List[str]** | List of safety features available with the car | [optional] 
**seller_comments** | **str** | Seller comments for the car | [optional] 
**standard_f** | **List[str]** | List of standard features available with the car | [optional] 
**technical_f** | **List[str]** | List of technical features available with the car | [optional] 

## Example

```python
from openapi_client.models.listing_nest_extra_attributes import ListingNestExtraAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ListingNestExtraAttributes from a JSON string
listing_nest_extra_attributes_instance = ListingNestExtraAttributes.from_json(json)
# print the JSON string representation of the object
print(ListingNestExtraAttributes.to_json())

# convert the object into a dict
listing_nest_extra_attributes_dict = listing_nest_extra_attributes_instance.to_dict()
# create an instance of ListingNestExtraAttributes from a dict
listing_nest_extra_attributes_from_dict = ListingNestExtraAttributes.from_dict(listing_nest_extra_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


