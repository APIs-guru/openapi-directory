# IssueLinkType

This object is used as follows:   *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it defines and reports on the type of link between the issues. Find a list of issue link types with [Get issue link types](#api-rest-api-3-issueLinkType-get).  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it defines and reports on issue link types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the issue link type and is used as follows:   *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when &#x60;name&#x60; isn&#39;t provided. Otherwise, read only.  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is read only. | [optional] 
**inward** | **str** | The description of the issue link type inward link and is used as follows:   *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is read only.  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only. | [optional] 
**name** | **str** | The name of the issue link type and is used as follows:   *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when &#x60;id&#x60; isn&#39;t provided. Otherwise, read only.  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only. | [optional] 
**outward** | **str** | The description of the issue link type outward link and is used as follows:   *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is read only.  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only. | [optional] 
**var_self** | **str** | The URL of the issue link type. Read only. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_link_type import IssueLinkType

# TODO update the JSON string below
json = "{}"
# create an instance of IssueLinkType from a JSON string
issue_link_type_instance = IssueLinkType.from_json(json)
# print the JSON string representation of the object
print(IssueLinkType.to_json())

# convert the object into a dict
issue_link_type_dict = issue_link_type_instance.to_dict()
# create an instance of IssueLinkType from a dict
issue_link_type_from_dict = IssueLinkType.from_dict(issue_link_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


