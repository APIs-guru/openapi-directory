# FlowLogInformation

Information on the configuration of flow log and traffic analytics (optional) .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow_analytics_configuration** | [**TrafficAnalyticsProperties**](TrafficAnalyticsProperties.md) |  | [optional] 
**properties** | [**FlowLogProperties**](FlowLogProperties.md) |  | 
**target_resource_id** | **str** | The ID of the resource to configure for flow log and traffic analytics (optional) . | 

## Example

```python
from openapi_client.models.flow_log_information import FlowLogInformation

# TODO update the JSON string below
json = "{}"
# create an instance of FlowLogInformation from a JSON string
flow_log_information_instance = FlowLogInformation.from_json(json)
# print the JSON string representation of the object
print(FlowLogInformation.to_json())

# convert the object into a dict
flow_log_information_dict = flow_log_information_instance.to_dict()
# create an instance of FlowLogInformation from a dict
flow_log_information_from_dict = FlowLogInformation.from_dict(flow_log_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


