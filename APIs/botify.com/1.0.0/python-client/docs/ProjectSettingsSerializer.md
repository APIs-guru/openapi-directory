# ProjectSettingsSerializer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_domains** | **List[str]** |  | 
**blacklisted_domains** | **List[str]** |  | 
**compare_crawl** | **bool** |  | [optional] 
**crawl_gzip** | **bool** |  | [optional] 
**extra_headers** | **str** |  | [optional] 
**google_analytics_account_email** | **str** | Keep email in case user delete his social auth connection | [optional] 
**google_analytics_nb_days** | **int** |  | [optional] 
**google_analytics_site_id** | **int** |  | [optional] 
**google_social_auth_id** | **int** |  | [optional] 
**has_robots_txt** | **str** |  | [optional] [readonly] 
**header_settings** | **List[str]** |  | 
**max_depth** | **int** |  | [optional] 
**max_nb_pages** | **int** |  | 
**max_pages_per_sec** | **int** |  | [optional] 
**respect_nofollow** | **bool** |  | [optional] 
**sitemaps** | **List[str]** |  | 
**start_urls** | **List[str]** |  | 
**user_agent** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.project_settings_serializer import ProjectSettingsSerializer

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectSettingsSerializer from a JSON string
project_settings_serializer_instance = ProjectSettingsSerializer.from_json(json)
# print the JSON string representation of the object
print(ProjectSettingsSerializer.to_json())

# convert the object into a dict
project_settings_serializer_dict = project_settings_serializer_instance.to_dict()
# create an instance of ProjectSettingsSerializer from a dict
project_settings_serializer_from_dict = ProjectSettingsSerializer.from_dict(project_settings_serializer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


