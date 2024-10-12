# LinkedRouterApplianceInstances

A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | [**List[RouterApplianceInstance]**](RouterApplianceInstance.md) | The list of router appliance instances. | [optional] 
**site_to_site_data_transfer** | **bool** | A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). | [optional] 
**vpc_network** | **str** | Output only. The VPC network where these router appliance instances are located. | [optional] [readonly] 

## Example

```python
from openapi_client.models.linked_router_appliance_instances import LinkedRouterApplianceInstances

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedRouterApplianceInstances from a JSON string
linked_router_appliance_instances_instance = LinkedRouterApplianceInstances.from_json(json)
# print the JSON string representation of the object
print(LinkedRouterApplianceInstances.to_json())

# convert the object into a dict
linked_router_appliance_instances_dict = linked_router_appliance_instances_instance.to_dict()
# create an instance of LinkedRouterApplianceInstances from a dict
linked_router_appliance_instances_from_dict = LinkedRouterApplianceInstances.from_dict(linked_router_appliance_instances_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


