# Footnote

A document footnote.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**List[StructuralElement]**](StructuralElement.md) | The contents of the footnote. The indexes for a footnote&#39;s content begin at zero. | [optional] 
**footnote_id** | **str** | The ID of the footnote. | [optional] 

## Example

```python
from openapi_client.models.footnote import Footnote

# TODO update the JSON string below
json = "{}"
# create an instance of Footnote from a JSON string
footnote_instance = Footnote.from_json(json)
# print the JSON string representation of the object
print(Footnote.to_json())

# convert the object into a dict
footnote_dict = footnote_instance.to_dict()
# create an instance of Footnote from a dict
footnote_from_dict = Footnote.from_dict(footnote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


