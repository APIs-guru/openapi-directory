# DealPausingInfo

Information related to deal pausing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pause_reason** | **str** | The reason for the pausing of the deal; empty for active deals. | [optional] 
**pause_role** | **str** | The party that first paused the deal; unspecified for active deals. | [optional] 
**pausing_consented** | **bool** | Whether pausing is consented between buyer and seller for the deal. | [optional] 

## Example

```python
from openapi_client.models.deal_pausing_info import DealPausingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DealPausingInfo from a JSON string
deal_pausing_info_instance = DealPausingInfo.from_json(json)
# print the JSON string representation of the object
print(DealPausingInfo.to_json())

# convert the object into a dict
deal_pausing_info_dict = deal_pausing_info_instance.to_dict()
# create an instance of DealPausingInfo from a dict
deal_pausing_info_from_dict = DealPausingInfo.from_dict(deal_pausing_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


