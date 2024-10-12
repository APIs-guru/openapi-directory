# ApplicationLoadInfo

Load Information about a Service Fabric application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_load_metric_information** | [**List[ApplicationMetricDescription]**](ApplicationMetricDescription.md) | List of application capacity metric description. | [optional] 
**id** | **str** | The identity of the application. This is an encoded representation of the application name. This is used in the REST APIs to identify the application resource. Starting in version 6.0, hierarchical names are delimited with the \&quot;\\~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp\\~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions.  | [optional] 
**maximum_nodes** | **int** | The maximum number of nodes where this application can be instantiated. It is the number of nodes this application is allowed to span. For applications that do not have application capacity defined this value will be zero.  | [optional] 
**minimum_nodes** | **int** | The minimum number of nodes for this application. It is the number of nodes where Service Fabric will reserve Capacity in the cluster which equals to ReservedLoad * MinimumNodes for this Application instance. For applications that do not have application capacity defined this value will be zero.  | [optional] 
**node_count** | **int** | The number of nodes on which this application is instantiated. For applications that do not have application capacity defined this value will be zero.  | [optional] 

## Example

```python
from openapi_client.models.application_load_info import ApplicationLoadInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationLoadInfo from a JSON string
application_load_info_instance = ApplicationLoadInfo.from_json(json)
# print the JSON string representation of the object
print(ApplicationLoadInfo.to_json())

# convert the object into a dict
application_load_info_dict = application_load_info_instance.to_dict()
# create an instance of ApplicationLoadInfo from a dict
application_load_info_from_dict = ApplicationLoadInfo.from_dict(application_load_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


