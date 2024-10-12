# Retailer

Retailer details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Contact email address for retailer cusomter support/queries | [optional] 
**id** | **int** | Unique identifier for the retailer | 
**name** | **str** | Name of the retailer | 
**phone** | **str** | Contact phone number for retailer customer support/queries | [optional] 

## Example

```python
from openapi_client.models.retailer import Retailer

# TODO update the JSON string below
json = "{}"
# create an instance of Retailer from a JSON string
retailer_instance = Retailer.from_json(json)
# print the JSON string representation of the object
print(Retailer.to_json())

# convert the object into a dict
retailer_dict = retailer_instance.to_dict()
# create an instance of Retailer from a dict
retailer_from_dict = Retailer.from_dict(retailer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


