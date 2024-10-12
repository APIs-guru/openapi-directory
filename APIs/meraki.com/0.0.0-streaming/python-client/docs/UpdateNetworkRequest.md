# UpdateNetworkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_my_meraki_com** | **bool** | Disables the local device status pages (&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://my.meraki.com/&#39;&gt;my.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://ap.meraki.com/&#39;&gt;ap.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://switch.meraki.com/&#39;&gt;switch.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://wired.meraki.com/&#39;&gt;wired.meraki.com&lt;/a&gt;). Optional (defaults to false) | [optional] 
**disable_remote_status_page** | **bool** | Disables access to the device status page (&lt;a target&#x3D;&#39;_blank&#39;&gt;http://[device&#39;s LAN IP])&lt;/a&gt;. Optional. Can only be set if disableMyMerakiCom is set to false | [optional] 
**enrollment_string** | **str** | A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break. | [optional] 
**name** | **str** | The name of the network | [optional] 
**tags** | **str** | A space-separated list of tags to be applied to the network | [optional] 
**time_zone** | **str** | The timezone of the network. For a list of allowed timezones, please see the &#39;TZ&#39; column in the table in &lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones&#39;&gt;this article.&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.update_network_request import UpdateNetworkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkRequest from a JSON string
update_network_request_instance = UpdateNetworkRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkRequest.to_json())

# convert the object into a dict
update_network_request_dict = update_network_request_instance.to_dict()
# create an instance of UpdateNetworkRequest from a dict
update_network_request_from_dict = UpdateNetworkRequest.from_dict(update_network_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


