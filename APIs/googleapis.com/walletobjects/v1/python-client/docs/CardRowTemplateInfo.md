# CardRowTemplateInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**one_item** | [**CardRowOneItem**](CardRowOneItem.md) |  | [optional] 
**three_items** | [**CardRowThreeItems**](CardRowThreeItems.md) |  | [optional] 
**two_items** | [**CardRowTwoItems**](CardRowTwoItems.md) |  | [optional] 

## Example

```python
from openapi_client.models.card_row_template_info import CardRowTemplateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CardRowTemplateInfo from a JSON string
card_row_template_info_instance = CardRowTemplateInfo.from_json(json)
# print the JSON string representation of the object
print(CardRowTemplateInfo.to_json())

# convert the object into a dict
card_row_template_info_dict = card_row_template_info_instance.to_dict()
# create an instance of CardRowTemplateInfo from a dict
card_row_template_info_from_dict = CardRowTemplateInfo.from_dict(card_row_template_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


