# DetailsTemplateOverride


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details_item_infos** | [**List[DetailsItemInfo]**](DetailsItemInfo.md) | Information for the \&quot;nth\&quot; item displayed in the details list. | [optional] 

## Example

```python
from openapi_client.models.details_template_override import DetailsTemplateOverride

# TODO update the JSON string below
json = "{}"
# create an instance of DetailsTemplateOverride from a JSON string
details_template_override_instance = DetailsTemplateOverride.from_json(json)
# print the JSON string representation of the object
print(DetailsTemplateOverride.to_json())

# convert the object into a dict
details_template_override_dict = details_template_override_instance.to_dict()
# create an instance of DetailsTemplateOverride from a dict
details_template_override_from_dict = DetailsTemplateOverride.from_dict(details_template_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


