# TableServiceProperties

Table service properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | **object** | Settings of storage services. | [optional] 
**health_status** | **str** | Current health status. | [optional] [readonly] 
**version** | **str** | Storage service version. | [optional] 

## Example

```python
from openapi_client.models.table_service_properties import TableServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TableServiceProperties from a JSON string
table_service_properties_instance = TableServiceProperties.from_json(json)
# print the JSON string representation of the object
print(TableServiceProperties.to_json())

# convert the object into a dict
table_service_properties_dict = table_service_properties_instance.to_dict()
# create an instance of TableServiceProperties from a dict
table_service_properties_from_dict = TableServiceProperties.from_dict(table_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


