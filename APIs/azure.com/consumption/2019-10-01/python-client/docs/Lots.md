# Lots

Result of listing lot summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[LotSummary]**](LotSummary.md) | The list of lot summary. | [optional] [readonly] 

## Example

```python
from openapi_client.models.lots import Lots

# TODO update the JSON string below
json = "{}"
# create an instance of Lots from a JSON string
lots_instance = Lots.from_json(json)
# print the JSON string representation of the object
print(Lots.to_json())

# convert the object into a dict
lots_dict = lots_instance.to_dict()
# create an instance of Lots from a dict
lots_from_dict = Lots.from_dict(lots_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


