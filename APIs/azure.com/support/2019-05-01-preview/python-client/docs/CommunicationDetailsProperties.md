# CommunicationDetailsProperties

Describes the properties of a communication resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Body of the communication | 
**communication_direction** | **str** | Direction of communication | [optional] [readonly] 
**communication_type** | **str** | Communication type | [optional] [readonly] 
**created_date** | **datetime** | Time in UTC (ISO 8601 format) when the communication was created. | [optional] [readonly] 
**sender** | **str** | Email address of the sender | [optional] 
**subject** | **str** | Subject of the communication | 

## Example

```python
from openapi_client.models.communication_details_properties import CommunicationDetailsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CommunicationDetailsProperties from a JSON string
communication_details_properties_instance = CommunicationDetailsProperties.from_json(json)
# print the JSON string representation of the object
print(CommunicationDetailsProperties.to_json())

# convert the object into a dict
communication_details_properties_dict = communication_details_properties_instance.to_dict()
# create an instance of CommunicationDetailsProperties from a dict
communication_details_properties_from_dict = CommunicationDetailsProperties.from_dict(communication_details_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


