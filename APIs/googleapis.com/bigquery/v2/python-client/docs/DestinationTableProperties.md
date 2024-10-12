# DestinationTableProperties

Properties for the destination table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. The description for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current description is provided, the job will fail. | [optional] 
**expiration_time** | **datetime** | Internal use only. | [optional] 
**friendly_name** | **str** | Optional. Friendly name for the destination table. If the table already exists, it should be same as the existing friendly name. | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels associated with this table. You can use these to organize and group your tables. This will only be used if the destination table is newly created. If the table already exists and labels are different than the current labels are provided, the job will fail. | [optional] 

## Example

```python
from openapi_client.models.destination_table_properties import DestinationTableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationTableProperties from a JSON string
destination_table_properties_instance = DestinationTableProperties.from_json(json)
# print the JSON string representation of the object
print(DestinationTableProperties.to_json())

# convert the object into a dict
destination_table_properties_dict = destination_table_properties_instance.to_dict()
# create an instance of DestinationTableProperties from a dict
destination_table_properties_from_dict = DestinationTableProperties.from_dict(destination_table_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


