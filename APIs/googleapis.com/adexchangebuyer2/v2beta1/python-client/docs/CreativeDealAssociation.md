# CreativeDealAssociation

The association between a creative and a deal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account the creative belongs to. | [optional] 
**creative_id** | **str** | The ID of the creative associated with the deal. | [optional] 
**deals_id** | **str** | The externalDealId for the deal associated with the creative. | [optional] 

## Example

```python
from openapi_client.models.creative_deal_association import CreativeDealAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeDealAssociation from a JSON string
creative_deal_association_instance = CreativeDealAssociation.from_json(json)
# print the JSON string representation of the object
print(CreativeDealAssociation.to_json())

# convert the object into a dict
creative_deal_association_dict = creative_deal_association_instance.to_dict()
# create an instance of CreativeDealAssociation from a dict
creative_deal_association_from_dict = CreativeDealAssociation.from_dict(creative_deal_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


