# Page

Represents a documentation page. A page can contain subpages to represent nested documentation set structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The Markdown content of the page. You can use (&#x3D;&#x3D; include {path} &#x3D;&#x3D;) to include content from a Markdown file. The content can be used to produce the documentation page such as HTML format page. | [optional] 
**name** | **str** | The name of the page. It will be used as an identity of the page to generate URI of the page, text of the link to this page in navigation, etc. The full page name (start from the root page name to this page concatenated with &#x60;.&#x60;) can be used as reference to the page in your documentation. For example: pages: - name: Tutorial content: (&#x3D;&#x3D; include tutorial.md &#x3D;&#x3D;) subpages: - name: Java content: (&#x3D;&#x3D; include tutorial_java.md &#x3D;&#x3D;) You can reference &#x60;Java&#x60; page using Markdown reference link syntax: &#x60;Java&#x60;. | [optional] 
**subpages** | [**List[Page]**](Page.md) | Subpages of this page. The order of subpages specified here will be honored in the generated docset. | [optional] 

## Example

```python
from openapi_client.models.page import Page

# TODO update the JSON string below
json = "{}"
# create an instance of Page from a JSON string
page_instance = Page.from_json(json)
# print the JSON string representation of the object
print(Page.to_json())

# convert the object into a dict
page_dict = page_instance.to_dict()
# create an instance of Page from a dict
page_from_dict = Page.from_dict(page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


