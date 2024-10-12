# AddDealAssociationRequest

A request for associating a deal and a creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**association** | [**CreativeDealAssociation**](CreativeDealAssociation.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_deal_association_request import AddDealAssociationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddDealAssociationRequest from a JSON string
add_deal_association_request_instance = AddDealAssociationRequest.from_json(json)
# print the JSON string representation of the object
print(AddDealAssociationRequest.to_json())

# convert the object into a dict
add_deal_association_request_dict = add_deal_association_request_instance.to_dict()
# create an instance of AddDealAssociationRequest from a dict
add_deal_association_request_from_dict = AddDealAssociationRequest.from_dict(add_deal_association_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


