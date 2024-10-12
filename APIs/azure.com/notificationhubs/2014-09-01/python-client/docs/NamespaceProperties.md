# NamespaceProperties

Namespace properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The time the namespace was created. | [optional] 
**critical** | **bool** | Whether or not the namespace is set as Critical. | [optional] 
**enabled** | **bool** | Whether or not the namespace is currently enabled. | [optional] 
**name** | **str** | The name of the namespace. | [optional] 
**namespace_type** | **str** | Gets or sets the namespace type. | [optional] 
**provisioning_state** | **str** | Gets or sets provisioning state of the Namespace. | [optional] 
**region** | **str** | Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia East, Australia Southeast, Central US, East US, East US 2, West US, North Central US, South Central US, East Asia, Southeast Asia, Brazil South, Japan East, Japan West, North Europe, West Europe | [optional] 
**scale_unit** | **str** | ScaleUnit where the namespace gets created | [optional] 
**service_bus_endpoint** | **str** | Endpoint you can use to perform NotificationHub operations. | [optional] 
**status** | **str** | Status of the namespace. It can be any of these values:1 &#x3D; Created/Active2 &#x3D; Creating3 &#x3D; Suspended4 &#x3D; Deleting | [optional] 
**subscription_id** | **str** | The Id of the Azure subscription associated with the namespace. | [optional] 

## Example

```python
from openapi_client.models.namespace_properties import NamespaceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NamespaceProperties from a JSON string
namespace_properties_instance = NamespaceProperties.from_json(json)
# print the JSON string representation of the object
print(NamespaceProperties.to_json())

# convert the object into a dict
namespace_properties_dict = namespace_properties_instance.to_dict()
# create an instance of NamespaceProperties from a dict
namespace_properties_from_dict = NamespaceProperties.from_dict(namespace_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


