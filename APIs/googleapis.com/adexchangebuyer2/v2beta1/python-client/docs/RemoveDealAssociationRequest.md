# RemoveDealAssociationRequest

A request for removing the association between a deal and a creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**association** | [**CreativeDealAssociation**](CreativeDealAssociation.md) |  | [optional] 

## Example

```python
from openapi_client.models.remove_deal_association_request import RemoveDealAssociationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveDealAssociationRequest from a JSON string
remove_deal_association_request_instance = RemoveDealAssociationRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveDealAssociationRequest.to_json())

# convert the object into a dict
remove_deal_association_request_dict = remove_deal_association_request_instance.to_dict()
# create an instance of RemoveDealAssociationRequest from a dict
remove_deal_association_request_from_dict = RemoveDealAssociationRequest.from_dict(remove_deal_association_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


