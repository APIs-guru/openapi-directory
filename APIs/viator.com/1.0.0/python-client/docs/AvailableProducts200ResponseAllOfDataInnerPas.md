# AvailableProducts200ResponseAllOfDataInnerPas

**object** detailing product availability - `pas` stands for Product Availability Schema 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incomplete_quote** | **bool** | ignore (Viator only) | [optional] 
**product_code** | **str** | **unique alphanumeric identifier** of *this* product | [optional] 
**removed_child_ages** | **List[str]** | ignore (Viator only) | [optional] 
**tour_grades** | [**Dict[str, AvailableProducts200ResponseAllOfDataInnerPasTourGradesValue]**](AvailableProducts200ResponseAllOfDataInnerPasTourGradesValue.md) | **dictionary** of tour grade alphanumeric codes to tour grade objects | [optional] 
**traveller_mix** | **str** | **alphanumeric code** indicating the combination of adults and children being enquired about | [optional] 

## Example

```python
from openapi_client.models.available_products200_response_all_of_data_inner_pas import AvailableProducts200ResponseAllOfDataInnerPas

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableProducts200ResponseAllOfDataInnerPas from a JSON string
available_products200_response_all_of_data_inner_pas_instance = AvailableProducts200ResponseAllOfDataInnerPas.from_json(json)
# print the JSON string representation of the object
print(AvailableProducts200ResponseAllOfDataInnerPas.to_json())

# convert the object into a dict
available_products200_response_all_of_data_inner_pas_dict = available_products200_response_all_of_data_inner_pas_instance.to_dict()
# create an instance of AvailableProducts200ResponseAllOfDataInnerPas from a dict
available_products200_response_all_of_data_inner_pas_from_dict = AvailableProducts200ResponseAllOfDataInnerPas.from_dict(available_products200_response_all_of_data_inner_pas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


