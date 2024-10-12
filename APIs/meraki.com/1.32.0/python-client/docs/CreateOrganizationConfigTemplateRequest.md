# CreateOrganizationConfigTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy_from_network_id** | **str** | The ID of the network or config template to copy configuration from | [optional] 
**name** | **str** | The name of the configuration template | 
**time_zone** | **str** | The timezone of the configuration template. For a list of allowed timezones, please see the &#39;TZ&#39; column in the table in &lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones&#39;&gt;this article&lt;/a&gt;. Not applicable if copying from existing network or template | [optional] 

## Example

```python
from openapi_client.models.create_organization_config_template_request import CreateOrganizationConfigTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationConfigTemplateRequest from a JSON string
create_organization_config_template_request_instance = CreateOrganizationConfigTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationConfigTemplateRequest.to_json())

# convert the object into a dict
create_organization_config_template_request_dict = create_organization_config_template_request_instance.to_dict()
# create an instance of CreateOrganizationConfigTemplateRequest from a dict
create_organization_config_template_request_from_dict = CreateOrganizationConfigTemplateRequest.from_dict(create_organization_config_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


