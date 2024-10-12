# CreateOrganizationNetworkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy_from_network_id** | **str** | The ID of the network to copy configuration from. Other provided parameters will override the copied configuration, except type which must match this network&#39;s type exactly. | [optional] 
**disable_my_meraki_com** | **bool** | Disables the local device status pages (&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://my.meraki.com/&#39;&gt;my.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://ap.meraki.com/&#39;&gt;ap.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://switch.meraki.com/&#39;&gt;switch.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://wired.meraki.com/&#39;&gt;wired.meraki.com&lt;/a&gt;). Optional (defaults to false) | [optional] 
**disable_remote_status_page** | **bool** | Disables access to the device status page (&lt;a target&#x3D;&#39;_blank&#39;&gt;http://[device&#39;s LAN IP])&lt;/a&gt;. Optional. Can only be set if disableMyMerakiCom is set to false | [optional] 
**name** | **str** | The name of the new network | 
**tags** | **str** | A space-separated list of tags to be applied to the network | [optional] 
**time_zone** | **str** | The timezone of the network. For a list of allowed timezones, please see the &#39;TZ&#39; column in the table in &lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones&#39;&gt;this article.&lt;/a&gt; | [optional] 
**type** | **str** | The type of the new network. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, environmental, or a space-separated list of those for a combined network. | 

## Example

```python
from openapi_client.models.create_organization_network_request import CreateOrganizationNetworkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationNetworkRequest from a JSON string
create_organization_network_request_instance = CreateOrganizationNetworkRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationNetworkRequest.to_json())

# convert the object into a dict
create_organization_network_request_dict = create_organization_network_request_instance.to_dict()
# create an instance of CreateOrganizationNetworkRequest from a dict
create_organization_network_request_from_dict = CreateOrganizationNetworkRequest.from_dict(create_organization_network_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


