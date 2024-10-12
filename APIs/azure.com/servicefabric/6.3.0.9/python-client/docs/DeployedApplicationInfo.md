# DeployedApplicationInfo

Information about application deployed on the node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**id** | **str** | The identity of the application. This is an encoded representation of the application name. This is used in the REST APIs to identify the application resource. Starting in version 6.0, hierarchical names are delimited with the \&quot;\\~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp\\~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | [optional] 
**log_directory** | **str** | The log directory of the application on the node. The log directory can be used to store application logs. | [optional] 
**name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 
**status** | [**DeployedApplicationStatus**](DeployedApplicationStatus.md) |  | [optional] 
**temp_directory** | **str** | The temp directory of the application on the node. The code packages belonging to the application are forked with this directory set as their temporary directory. | [optional] 
**type_name** | **str** | The application type name as defined in the application manifest. | [optional] 
**work_directory** | **str** | The work directory of the application on the node. The work directory can be used to store application data. | [optional] 

## Example

```python
from openapi_client.models.deployed_application_info import DeployedApplicationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedApplicationInfo from a JSON string
deployed_application_info_instance = DeployedApplicationInfo.from_json(json)
# print the JSON string representation of the object
print(DeployedApplicationInfo.to_json())

# convert the object into a dict
deployed_application_info_dict = deployed_application_info_instance.to_dict()
# create an instance of DeployedApplicationInfo from a dict
deployed_application_info_from_dict = DeployedApplicationInfo.from_dict(deployed_application_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


