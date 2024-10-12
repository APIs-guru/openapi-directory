# ProfitAndLossSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**records** | [**List[ProfitAndLossRecordsInner]**](ProfitAndLossRecordsInner.md) |  | [optional] 
**title** | **str** |  | [optional] 
**total** | **float** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.profit_and_loss_section import ProfitAndLossSection

# TODO update the JSON string below
json = "{}"
# create an instance of ProfitAndLossSection from a JSON string
profit_and_loss_section_instance = ProfitAndLossSection.from_json(json)
# print the JSON string representation of the object
print(ProfitAndLossSection.to_json())

# convert the object into a dict
profit_and_loss_section_dict = profit_and_loss_section_instance.to_dict()
# create an instance of ProfitAndLossSection from a dict
profit_and_loss_section_from_dict = ProfitAndLossSection.from_dict(profit_and_loss_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


