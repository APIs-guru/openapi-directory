# Footer

A document footer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**List[StructuralElement]**](StructuralElement.md) | The contents of the footer. The indexes for a footer&#39;s content begin at zero. | [optional] 
**footer_id** | **str** | The ID of the footer. | [optional] 

## Example

```python
from openapi_client.models.footer import Footer

# TODO update the JSON string below
json = "{}"
# create an instance of Footer from a JSON string
footer_instance = Footer.from_json(json)
# print the JSON string representation of the object
print(Footer.to_json())

# convert the object into a dict
footer_dict = footer_instance.to_dict()
# create an instance of Footer from a dict
footer_from_dict = Footer.from_dict(footer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


