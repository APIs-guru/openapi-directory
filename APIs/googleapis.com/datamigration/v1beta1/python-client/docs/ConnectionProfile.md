# ConnectionProfile

A connection profile definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloudsql** | [**CloudSqlConnectionProfile**](CloudSqlConnectionProfile.md) |  | [optional] 
**create_time** | **str** | Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC \&quot;Zulu\&quot; format, accurate to nanoseconds. Example: \&quot;2014-10-02T15:01:23.045123456Z\&quot;. | [optional] [readonly] 
**display_name** | **str** | The connection profile display name. | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**labels** | **Dict[str, str]** | The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of \&quot;key\&quot;: \&quot;value\&quot; pairs. Example: &#x60;{ \&quot;name\&quot;: \&quot;wrench\&quot;, \&quot;mass\&quot;: \&quot;1.3kg\&quot;, \&quot;count\&quot;: \&quot;3\&quot; }&#x60;. | [optional] 
**mysql** | [**MySqlConnectionProfile**](MySqlConnectionProfile.md) |  | [optional] 
**name** | **str** | The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}. | [optional] 
**provider** | **str** | The database provider. | [optional] 
**state** | **str** | The current connection profile state (e.g. DRAFT, READY, or FAILED). | [optional] 
**update_time** | **str** | Output only. The timestamp when the resource was last updated. A timestamp in RFC3339 UTC \&quot;Zulu\&quot; format, accurate to nanoseconds. Example: \&quot;2014-10-02T15:01:23.045123456Z\&quot;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_profile import ConnectionProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionProfile from a JSON string
connection_profile_instance = ConnectionProfile.from_json(json)
# print the JSON string representation of the object
print(ConnectionProfile.to_json())

# convert the object into a dict
connection_profile_dict = connection_profile_instance.to_dict()
# create an instance of ConnectionProfile from a dict
connection_profile_from_dict = ConnectionProfile.from_dict(connection_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


