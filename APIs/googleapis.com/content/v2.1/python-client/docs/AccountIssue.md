# AccountIssue

An issue affecting specific merchant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[Action]**](Action.md) | A list of actionable steps that can be executed to solve the issue. An example is requesting a re-review or providing arguments when merchant disagrees with the issue. Actions that are supported in (your) third-party application can be rendered as buttons and should be available to merchant when they expand the issue. | [optional] 
**impact** | [**AccountIssueImpact**](AccountIssueImpact.md) |  | [optional] 
**prerendered_content** | **str** | Details of the issue as a pre-rendered HTML. HTML elements contain CSS classes that can be used to customize the style of the content. Always sanitize the HTML before embedding it directly to your application. The sanitizer needs to allow basic HTML tags, such as: &#x60;div&#x60;, &#x60;span&#x60;, &#x60;p&#x60;, &#x60;a&#x60;, &#x60;ul&#x60;, &#x60;li&#x60;, &#x60;table&#x60;, &#x60;tr&#x60;, &#x60;td&#x60;. For example, you can use [DOMPurify](https://www.npmjs.com/package/dompurify). CSS classes: * &#x60;issue-detail&#x60; - top level container for the detail of the issue * &#x60;callout-banners&#x60; - section of the &#x60;issue-detail&#x60; with callout banners * &#x60;callout-banner&#x60; - single callout banner, inside &#x60;callout-banners&#x60; * &#x60;callout-banner-info&#x60; - callout with important information (default) * &#x60;callout-banner-warning&#x60; - callout with a warning * &#x60;callout-banner-error&#x60; - callout informing about an error (most severe) * &#x60;issue-content&#x60; - section of the &#x60;issue-detail&#x60;, contains multiple &#x60;content-element&#x60; * &#x60;content-element&#x60; - content element such as a list, link or paragraph, inside &#x60;issue-content&#x60; * &#x60;root-causes&#x60; - unordered list with items describing root causes of the issue, inside &#x60;issue-content&#x60; * &#x60;root-causes-intro&#x60; - intro text before the &#x60;root-causes&#x60; list, inside &#x60;issue-content&#x60; * &#x60;segment&#x60; - section of the text, &#x60;span&#x60; inside paragraph * &#x60;segment-attribute&#x60; - section of the text that represents a product attribute, for example &#39;image\\_link&#39; * &#x60;segment-literal&#x60; - section of the text that contains a special value, for example &#39;0-1000 kg&#39; * &#x60;segment-bold&#x60; - section of the text that should be rendered as bold * &#x60;segment-italic&#x60; - section of the text that should be rendered as italic * &#x60;tooltip&#x60; - used on paragraphs that should be rendered with a tooltip. A section of the text in such a paragraph will have a class &#x60;tooltip-text&#x60; and is intended to be shown in a mouse over dialog. If the style is not used, the &#x60;tooltip-text&#x60; section would be shown on a new line, after the main part of the text. * &#x60;tooltip-text&#x60; - marks a section of the text within a &#x60;tooltip&#x60;, that is intended to be shown in a mouse over dialog. * &#x60;tooltip-icon&#x60; - marks a section of the text within a &#x60;tooltip&#x60;, that can be replaced with a tooltip icon, for example &#39;?&#39; or &#39;i&#39;. By default, this section contains a &#x60;br&#x60; tag, that is separating the main text and the tooltip text when the style is not used. * &#x60;tooltip-style-question&#x60; - the tooltip shows helpful information, can use the &#39;?&#39; as an icon. * &#x60;tooltip-style-info&#x60; - the tooltip adds additional information fitting to the context, can use the &#39;i&#39; as an icon. * &#x60;content-moderation&#x60; - marks the paragraph that explains how the issue was identified. * &#x60;new-element&#x60; - Present for new elements added to the pre-rendered content in the future. To make sure that a new content element does not break your style, you can hide everything with this class. | [optional] 
**title** | **str** | Title of the issue. | [optional] 

## Example

```python
from openapi_client.models.account_issue import AccountIssue

# TODO update the JSON string below
json = "{}"
# create an instance of AccountIssue from a JSON string
account_issue_instance = AccountIssue.from_json(json)
# print the JSON string representation of the object
print(AccountIssue.to_json())

# convert the object into a dict
account_issue_dict = account_issue_instance.to_dict()
# create an instance of AccountIssue from a dict
account_issue_from_dict = AccountIssue.from_dict(account_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


