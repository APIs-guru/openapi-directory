# CommunicationDetails

Object that represents Communication resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the resource | [optional] [readonly] 
**name** | **str** | Name of the resource | [optional] [readonly] 
**properties** | [**CommunicationDetailsProperties**](CommunicationDetailsProperties.md) |  | [optional] 
**type** | **str** | Type of the resource &#39;Microsoft.Support/communications&#39; | [optional] [readonly] 

## Example

```python
from openapi_client.models.communication_details import CommunicationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CommunicationDetails from a JSON string
communication_details_instance = CommunicationDetails.from_json(json)
# print the JSON string representation of the object
print(CommunicationDetails.to_json())

# convert the object into a dict
communication_details_dict = communication_details_instance.to_dict()
# create an instance of CommunicationDetails from a dict
communication_details_from_dict = CommunicationDetails.from_dict(communication_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


