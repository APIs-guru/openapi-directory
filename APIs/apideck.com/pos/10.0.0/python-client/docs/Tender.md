# Tender


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] 
**allows_tipping** | **bool** | Allow tipping on payment from tender | [optional] [default to True]
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**editable** | **bool** |  | [optional] 
**hidden** | **bool** |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**key** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**opens_cash_drawer** | **bool** | If this tender opens the cash drawer | [optional] [default to True]
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tender import Tender

# TODO update the JSON string below
json = "{}"
# create an instance of Tender from a JSON string
tender_instance = Tender.from_json(json)
# print the JSON string representation of the object
print(Tender.to_json())

# convert the object into a dict
tender_dict = tender_instance.to_dict()
# create an instance of Tender from a dict
tender_from_dict = Tender.from_dict(tender_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


