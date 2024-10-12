# PrintServer

Configuration for a print server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when the print server was created. | [optional] [readonly] 
**description** | **str** | Editable. Description of the print server (as shown in the Admin console). | [optional] 
**display_name** | **str** | Editable. Display name of the print server (as shown in the Admin console). | [optional] 
**id** | **str** | Immutable. ID of the print server. Leave empty when creating. | [optional] 
**name** | **str** | Immutable. Resource name of the print server. Leave empty when creating. Format: &#x60;customers/{customer.id}/printServers/{print_server.id}&#x60; | [optional] 
**org_unit_id** | **str** | ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it&#39;s not populated, the print server is placed under the root OU. The &#x60;org_unit_id&#x60; can be retrieved using the [Directory API](/admin-sdk/directory/reference/rest/v1/orgunits). | [optional] 
**uri** | **str** | Editable. Print server URI. | [optional] 

## Example

```python
from openapi_client.models.print_server import PrintServer

# TODO update the JSON string below
json = "{}"
# create an instance of PrintServer from a JSON string
print_server_instance = PrintServer.from_json(json)
# print the JSON string representation of the object
print(PrintServer.to_json())

# convert the object into a dict
print_server_dict = print_server_instance.to_dict()
# create an instance of PrintServer from a dict
print_server_from_dict = PrintServer.from_dict(print_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


