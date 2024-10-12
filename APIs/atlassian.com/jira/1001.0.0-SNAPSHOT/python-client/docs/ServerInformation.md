# ServerInformation

Details about the Jira instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_url** | **str** | The base URL of the Jira instance. | [optional] 
**build_date** | **datetime** | The timestamp when the Jira version was built. | [optional] 
**build_number** | **int** | The build number of the Jira version. | [optional] 
**deployment_type** | **str** | The type of server deployment. This is always returned as *Cloud*. | [optional] 
**health_checks** | [**List[HealthCheckResult]**](HealthCheckResult.md) | Jira instance health check results. Deprecated and no longer returned. | [optional] 
**scm_info** | **str** | The unique identifier of the Jira version. | [optional] 
**server_time** | **datetime** | The time in Jira when this request was responded to. | [optional] 
**server_title** | **str** | The name of the Jira instance. | [optional] 
**version** | **str** | The version of Jira. | [optional] 
**version_numbers** | **List[int]** | The major, minor, and revision version numbers of the Jira version. | [optional] 

## Example

```python
from openapi_client.models.server_information import ServerInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ServerInformation from a JSON string
server_information_instance = ServerInformation.from_json(json)
# print the JSON string representation of the object
print(ServerInformation.to_json())

# convert the object into a dict
server_information_dict = server_information_instance.to_dict()
# create an instance of ServerInformation from a dict
server_information_from_dict = ServerInformation.from_dict(server_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


