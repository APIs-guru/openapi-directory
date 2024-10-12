# LotSummary

A lot summary resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LotProperties**](LotProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.lot_summary import LotSummary

# TODO update the JSON string below
json = "{}"
# create an instance of LotSummary from a JSON string
lot_summary_instance = LotSummary.from_json(json)
# print the JSON string representation of the object
print(LotSummary.to_json())

# convert the object into a dict
lot_summary_dict = lot_summary_instance.to_dict()
# create an instance of LotSummary from a dict
lot_summary_from_dict = LotSummary.from_dict(lot_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


