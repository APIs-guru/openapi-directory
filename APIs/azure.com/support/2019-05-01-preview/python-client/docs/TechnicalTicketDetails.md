# TechnicalTicketDetails

Additional information for technical support ticket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** | This is the resource id of the Azure service resource (For example: A virtual machine resource or an HDInsight resource) for which the support ticket is created. | [optional] 

## Example

```python
from openapi_client.models.technical_ticket_details import TechnicalTicketDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TechnicalTicketDetails from a JSON string
technical_ticket_details_instance = TechnicalTicketDetails.from_json(json)
# print the JSON string representation of the object
print(TechnicalTicketDetails.to_json())

# convert the object into a dict
technical_ticket_details_dict = technical_ticket_details_instance.to_dict()
# create an instance of TechnicalTicketDetails from a dict
technical_ticket_details_from_dict = TechnicalTicketDetails.from_dict(technical_ticket_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


