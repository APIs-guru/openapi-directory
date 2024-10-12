# ConnectorResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_fields_supported** | **bool** | Indicates if custom fields are supported on this resource. | [optional] 
**downstream_id** | **str** | ID of the resource in the Connector&#39;s API (downstream) | [optional] 
**downstream_name** | **str** | Name of the resource in the Connector&#39;s API (downstream) | [optional] 
**downstream_unsupported_operations** | **List[str]** | List of operations that are not supported on the downstream. | [optional] 
**id** | **str** | ID of the resource, typically a lowercased version of name. | [optional] 
**name** | **str** | Name of the resource (plural) | [optional] 
**pagination** | [**PaginationCoverage**](PaginationCoverage.md) |  | [optional] 
**pagination_supported** | **bool** | Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource. | [optional] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
**supported_fields** | [**List[SupportedProperty]**](SupportedProperty.md) | Supported fields on the detail endpoint. | [optional] 
**supported_filters** | **List[str]** | Supported filters on the list endpoint of the resource. | [optional] 
**supported_list_fields** | [**List[SupportedProperty]**](SupportedProperty.md) | Supported fields on the list endpoint. | [optional] 
**supported_operations** | **List[str]** | List of supported operations on the resource. | [optional] 
**supported_sort_by** | **List[str]** | Supported sorting properties on the list endpoint of the resource. | [optional] 

## Example

```python
from openapi_client.models.connector_resource import ConnectorResource

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorResource from a JSON string
connector_resource_instance = ConnectorResource.from_json(json)
# print the JSON string representation of the object
print(ConnectorResource.to_json())

# convert the object into a dict
connector_resource_dict = connector_resource_instance.to_dict()
# create an instance of ConnectorResource from a dict
connector_resource_from_dict = ConnectorResource.from_dict(connector_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


