# Product200ResponseAllOfDataAgeBandsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adult** | **bool** | **indicator**: &#x60;true&#x60; if *this* age band describes adults (not children) | [optional] 
**age_from** | **int** | **numeric lower age limit** of the age range defined by *this* age band | [optional] 
**age_to** | **int** | **numeric upper age limit** of the age range included in *this* age band | [optional] 
**band_id** | **int** | **unique numeric identifier** for the age band - See: [Working with age bands](#section/Appendices/Working-with-age-bands)  | [optional] 
**count** | **int** | **number** of participants in *this* age band required to book the product | [optional] 
**description** | **str** | **natural-language description** (singular) of *this* age band | [optional] 
**plural_description** | **str** | **natural-language description** (plural) of *this* age band | [optional] 
**sort_order** | **int** | **sort order** for *this* age band object | [optional] 
**treat_as_adult** | **bool** | **indicator**: &#x60;true&#x60; if members of this age band are considered to be adults | [optional] 

## Example

```python
from openapi_client.models.product200_response_all_of_data_age_bands_inner import Product200ResponseAllOfDataAgeBandsInner

# TODO update the JSON string below
json = "{}"
# create an instance of Product200ResponseAllOfDataAgeBandsInner from a JSON string
product200_response_all_of_data_age_bands_inner_instance = Product200ResponseAllOfDataAgeBandsInner.from_json(json)
# print the JSON string representation of the object
print(Product200ResponseAllOfDataAgeBandsInner.to_json())

# convert the object into a dict
product200_response_all_of_data_age_bands_inner_dict = product200_response_all_of_data_age_bands_inner_instance.to_dict()
# create an instance of Product200ResponseAllOfDataAgeBandsInner from a dict
product200_response_all_of_data_age_bands_inner_from_dict = Product200ResponseAllOfDataAgeBandsInner.from_dict(product200_response_all_of_data_age_bands_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


