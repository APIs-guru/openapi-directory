# ServicePerimeter

`ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the &#x60;ServicePerimeter&#x60; and its use. Does not affect behavior. | [optional] 
**name** | **str** | Resource name for the &#x60;ServicePerimeter&#x60;. Format: &#x60;accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}&#x60;. The &#x60;service_perimeter&#x60; component must begin with a letter, followed by alphanumeric characters or &#x60;_&#x60;. After you create a &#x60;ServicePerimeter&#x60;, you cannot change its &#x60;name&#x60;. | [optional] 
**perimeter_type** | **str** | Perimeter type indicator. A single project is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, restricted/unrestricted service lists as well as access lists must be empty. | [optional] 
**status** | [**ServicePerimeterConfig**](ServicePerimeterConfig.md) |  | [optional] 
**title** | **str** | Human readable title. Must be unique within the Policy. | [optional] 

## Example

```python
from openapi_client.models.service_perimeter import ServicePerimeter

# TODO update the JSON string below
json = "{}"
# create an instance of ServicePerimeter from a JSON string
service_perimeter_instance = ServicePerimeter.from_json(json)
# print the JSON string representation of the object
print(ServicePerimeter.to_json())

# convert the object into a dict
service_perimeter_dict = service_perimeter_instance.to_dict()
# create an instance of ServicePerimeter from a dict
service_perimeter_from_dict = ServicePerimeter.from_dict(service_perimeter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


