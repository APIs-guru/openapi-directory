# BillingProperty

A billing property resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BillingPropertySummary**](BillingPropertySummary.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_property import BillingProperty

# TODO update the JSON string below
json = "{}"
# create an instance of BillingProperty from a JSON string
billing_property_instance = BillingProperty.from_json(json)
# print the JSON string representation of the object
print(BillingProperty.to_json())

# convert the object into a dict
billing_property_dict = billing_property_instance.to_dict()
# create an instance of BillingProperty from a dict
billing_property_from_dict = BillingProperty.from_dict(billing_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


