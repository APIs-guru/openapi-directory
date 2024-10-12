# CreativeDealIds

The external deal ids associated with a creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deal_statuses** | [**List[CreativeDealIdsDealStatusesInner]**](CreativeDealIdsDealStatusesInner.md) | A list of external deal ids and ARC approval status. | [optional] 
**kind** | **str** | Resource type. | [optional] [default to 'adexchangebuyer#creativeDealIds']

## Example

```python
from openapi_client.models.creative_deal_ids import CreativeDealIds

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeDealIds from a JSON string
creative_deal_ids_instance = CreativeDealIds.from_json(json)
# print the JSON string representation of the object
print(CreativeDealIds.to_json())

# convert the object into a dict
creative_deal_ids_dict = creative_deal_ids_instance.to_dict()
# create an instance of CreativeDealIds from a dict
creative_deal_ids_from_dict = CreativeDealIds.from_dict(creative_deal_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


