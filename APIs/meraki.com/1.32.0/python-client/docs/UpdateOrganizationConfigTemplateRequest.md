# UpdateOrganizationConfigTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the configuration template | [optional] 
**time_zone** | **str** | The timezone of the configuration template. For a list of allowed timezones, please see the &#39;TZ&#39; column in the table in &lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones&#39;&gt;this article.&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.update_organization_config_template_request import UpdateOrganizationConfigTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationConfigTemplateRequest from a JSON string
update_organization_config_template_request_instance = UpdateOrganizationConfigTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationConfigTemplateRequest.to_json())

# convert the object into a dict
update_organization_config_template_request_dict = update_organization_config_template_request_instance.to_dict()
# create an instance of UpdateOrganizationConfigTemplateRequest from a dict
update_organization_config_template_request_from_dict = UpdateOrganizationConfigTemplateRequest.from_dict(update_organization_config_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


