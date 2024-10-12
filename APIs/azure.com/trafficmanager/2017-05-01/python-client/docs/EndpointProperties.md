# EndpointProperties

Class representing a Traffic Manager endpoint properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_location** | **str** | Specifies the location of the external or nested endpoints when using the ‘Performance’ traffic routing method. | [optional] 
**endpoint_monitor_status** | **str** | The monitoring status of the endpoint. | [optional] 
**endpoint_status** | **str** | The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method. | [optional] 
**geo_mapping** | **List[str]** | The list of countries/regions mapped to this endpoint when using the ‘Geographic’ traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values. | [optional] 
**min_child_endpoints** | **int** | The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type &#39;NestedEndpoints&#39;. | [optional] 
**priority** | **int** | The priority of this endpoint when using the ‘Priority’ traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value. | [optional] 
**target** | **str** | The fully-qualified DNS name of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint. | [optional] 
**target_resource_id** | **str** | The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type &#39;ExternalEndpoints&#39;. | [optional] 
**weight** | **int** | The weight of this endpoint when using the &#39;Weighted&#39; traffic routing method. Possible values are from 1 to 1000. | [optional] 

## Example

```python
from openapi_client.models.endpoint_properties import EndpointProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointProperties from a JSON string
endpoint_properties_instance = EndpointProperties.from_json(json)
# print the JSON string representation of the object
print(EndpointProperties.to_json())

# convert the object into a dict
endpoint_properties_dict = endpoint_properties_instance.to_dict()
# create an instance of EndpointProperties from a dict
endpoint_properties_from_dict = EndpointProperties.from_dict(endpoint_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


