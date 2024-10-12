# Newshipmentstatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**courier** | [**Courier**](Courier.md) |  | 
**cte** | **str** | Conhecimento do Transporte Eletrônico | [optional] 
**invoice** | [**Invoice**](Invoice.md) |  | 
**items** | **List[str]** | List of Order IDs of this items from this order that will be updated in this shipment | 
**number** | **str** | Unique id shipment Id in the courier system | [optional] 
**occurred_at** | **datetime** | Data da ocorrência | 
**seller_shipment_id** | **str** | Unique Seller shipment Id. This must be unique across all orders and shipmnents | 
**tracking_url** | **str** | Courier tracking URL | [optional] 

## Example

```python
from openapi_client.models.newshipmentstatus import Newshipmentstatus

# TODO update the JSON string below
json = "{}"
# create an instance of Newshipmentstatus from a JSON string
newshipmentstatus_instance = Newshipmentstatus.from_json(json)
# print the JSON string representation of the object
print(Newshipmentstatus.to_json())

# convert the object into a dict
newshipmentstatus_dict = newshipmentstatus_instance.to_dict()
# create an instance of Newshipmentstatus from a dict
newshipmentstatus_from_dict = Newshipmentstatus.from_dict(newshipmentstatus_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


