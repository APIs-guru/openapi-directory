# ContainerVersionHeader

Represents a Google Tag Manager Container Version Header.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**container_id** | **str** | GTM Container ID. | [optional] 
**container_version_id** | **str** | The Container Version ID uniquely identifies the GTM Container Version. | [optional] 
**deleted** | **bool** | A value of true indicates this container version has been deleted. | [optional] 
**name** | **str** | Container version display name. | [optional] 
**num_clients** | **str** | Number of clients in the container version. | [optional] 
**num_custom_templates** | **str** | Number of custom templates in the container version. | [optional] 
**num_gtag_configs** | **str** | Number of Google tag configs in the container version. | [optional] 
**num_macros** | **str** | Number of macros in the container version. | [optional] 
**num_rules** | **str** | Number of rules in the container version. | [optional] 
**num_tags** | **str** | Number of tags in the container version. | [optional] 
**num_transformations** | **str** | Number of transformations in the container version. | [optional] 
**num_triggers** | **str** | Number of triggers in the container version. | [optional] 
**num_variables** | **str** | Number of variables in the container version. | [optional] 
**num_zones** | **str** | Number of zones in the container version. | [optional] 
**path** | **str** | GTM Container Version&#39;s API relative path. | [optional] 

## Example

```python
from openapi_client.models.container_version_header import ContainerVersionHeader

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerVersionHeader from a JSON string
container_version_header_instance = ContainerVersionHeader.from_json(json)
# print the JSON string representation of the object
print(ContainerVersionHeader.to_json())

# convert the object into a dict
container_version_header_dict = container_version_header_instance.to_dict()
# create an instance of ContainerVersionHeader from a dict
container_version_header_from_dict = ContainerVersionHeader.from_dict(container_version_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


