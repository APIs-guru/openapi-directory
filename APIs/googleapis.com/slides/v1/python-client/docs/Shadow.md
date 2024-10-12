# Shadow

The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alignment** | **str** | The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only. | [optional] 
**alpha** | **float** | The alpha of the shadow&#39;s color, from 0.0 to 1.0. | [optional] 
**blur_radius** | [**Dimension**](Dimension.md) |  | [optional] 
**color** | [**OpaqueColor**](OpaqueColor.md) |  | [optional] 
**property_state** | **str** | The shadow property state. Updating the shadow on a page element will implicitly update this field to &#x60;RENDERED&#x60;, unless another value is specified in the same request. To have no shadow on a page element, set this field to &#x60;NOT_RENDERED&#x60;. In this case, any other shadow fields set in the same request will be ignored. | [optional] 
**rotate_with_shape** | **bool** | Whether the shadow should rotate with the shape. This property is read-only. | [optional] 
**transform** | [**AffineTransform**](AffineTransform.md) |  | [optional] 
**type** | **str** | The type of the shadow. This property is read-only. | [optional] 

## Example

```python
from openapi_client.models.shadow import Shadow

# TODO update the JSON string below
json = "{}"
# create an instance of Shadow from a JSON string
shadow_instance = Shadow.from_json(json)
# print the JSON string representation of the object
print(Shadow.to_json())

# convert the object into a dict
shadow_dict = shadow_instance.to_dict()
# create an instance of Shadow from a dict
shadow_from_dict = Shadow.from_dict(shadow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


