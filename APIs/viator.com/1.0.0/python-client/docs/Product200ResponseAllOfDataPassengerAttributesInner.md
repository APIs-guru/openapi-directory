# Product200ResponseAllOfDataPassengerAttributesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_attribute_kgs** | **str** | ignore (Viator only) | [optional] 
**custom_attribute_lbs** | **str** | ignore (Viator only) | [optional] 
**error_missing_message** | **str** | ignore (Viator only) | [optional] 
**error_validation_message** | **str** | ignore (Viator only) | [optional] 
**question_id** | **str** | ignore (Viator only) | [optional] 
**required** | **bool** | ignore (Viator only) | [optional] 
**title** | **str** | ignore (Viator only) | [optional] 
**validate_type** | **str** | ignore (Viator only) | [optional] 

## Example

```python
from openapi_client.models.product200_response_all_of_data_passenger_attributes_inner import Product200ResponseAllOfDataPassengerAttributesInner

# TODO update the JSON string below
json = "{}"
# create an instance of Product200ResponseAllOfDataPassengerAttributesInner from a JSON string
product200_response_all_of_data_passenger_attributes_inner_instance = Product200ResponseAllOfDataPassengerAttributesInner.from_json(json)
# print the JSON string representation of the object
print(Product200ResponseAllOfDataPassengerAttributesInner.to_json())

# convert the object into a dict
product200_response_all_of_data_passenger_attributes_inner_dict = product200_response_all_of_data_passenger_attributes_inner_instance.to_dict()
# create an instance of Product200ResponseAllOfDataPassengerAttributesInner from a dict
product200_response_all_of_data_passenger_attributes_inner_from_dict = Product200ResponseAllOfDataPassengerAttributesInner.from_dict(product200_response_all_of_data_passenger_attributes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


