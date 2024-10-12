# Site

A `Site` represents a Firebase Hosting site.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | Optional. The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the Hosting site. | [optional] 
**default_url** | **str** | Output only. The default URL for the Hosting site. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. User-specified labels for the Hosting site. | [optional] 
**name** | **str** | Output only. The fully-qualified resource name of the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the Firebase project&#39;s [&#x60;ProjectNumber&#x60;](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [&#x60;ProjectId&#x60;](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google&#39;s [AIP 2510 standard](https://google.aip.dev/cloud/2510). | [optional] [readonly] 
**type** | **str** | Output only. The type of Hosting site. Every Firebase project has a &#x60;DEFAULT_SITE&#x60;, which is created when Hosting is provisioned for the project. All additional sites are &#x60;USER_SITE&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.site import Site

# TODO update the JSON string below
json = "{}"
# create an instance of Site from a JSON string
site_instance = Site.from_json(json)
# print the JSON string representation of the object
print(Site.to_json())

# convert the object into a dict
site_dict = site_instance.to_dict()
# create an instance of Site from a dict
site_from_dict = Site.from_dict(site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


