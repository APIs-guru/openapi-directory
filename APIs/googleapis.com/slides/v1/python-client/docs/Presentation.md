# Presentation

A Google Slides presentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**layouts** | [**List[Page]**](Page.md) | The layouts in the presentation. A layout is a template that determines how content is arranged and styled on the slides that inherit from that layout. | [optional] 
**locale** | **str** | The locale of the presentation, as an IETF BCP 47 language tag. | [optional] 
**masters** | [**List[Page]**](Page.md) | The slide masters in the presentation. A slide master contains all common page elements and the common properties for a set of layouts. They serve three purposes: - Placeholder shapes on a master contain the default text styles and shape properties of all placeholder shapes on pages that use that master. - The master page properties define the common page properties inherited by its layouts. - Any other shapes on the master slide appear on all slides using that master, regardless of their layout. | [optional] 
**notes_master** | [**Page**](Page.md) |  | [optional] 
**page_size** | [**Size**](Size.md) |  | [optional] 
**presentation_id** | **str** | The ID of the presentation. | [optional] 
**revision_id** | **str** | Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn&#39;t changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but a nebulous string. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes. | [optional] 
**slides** | [**List[Page]**](Page.md) | The slides in the presentation. A slide inherits properties from a slide layout. | [optional] 
**title** | **str** | The title of the presentation. | [optional] 

## Example

```python
from openapi_client.models.presentation import Presentation

# TODO update the JSON string below
json = "{}"
# create an instance of Presentation from a JSON string
presentation_instance = Presentation.from_json(json)
# print the JSON string representation of the object
print(Presentation.to_json())

# convert the object into a dict
presentation_dict = presentation_instance.to_dict()
# create an instance of Presentation from a dict
presentation_from_dict = Presentation.from_dict(presentation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


