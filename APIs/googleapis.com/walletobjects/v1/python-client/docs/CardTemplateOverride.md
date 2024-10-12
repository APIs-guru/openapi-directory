# CardTemplateOverride


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_row_template_infos** | [**List[CardRowTemplateInfo]**](CardRowTemplateInfo.md) | Template information for rows in the card view. At most three rows are allowed to be specified. | [optional] 

## Example

```python
from openapi_client.models.card_template_override import CardTemplateOverride

# TODO update the JSON string below
json = "{}"
# create an instance of CardTemplateOverride from a JSON string
card_template_override_instance = CardTemplateOverride.from_json(json)
# print the JSON string representation of the object
print(CardTemplateOverride.to_json())

# convert the object into a dict
card_template_override_dict = card_template_override_instance.to_dict()
# create an instance of CardTemplateOverride from a dict
card_template_override_from_dict = CardTemplateOverride.from_dict(card_template_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


