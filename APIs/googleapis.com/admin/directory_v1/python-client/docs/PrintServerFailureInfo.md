# PrintServerFailureInfo

Info about failures

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Canonical code for why the update failed to apply. | [optional] 
**error_message** | **str** | Failure reason message. | [optional] 
**print_server** | [**PrintServer**](PrintServer.md) |  | [optional] 
**print_server_id** | **str** | ID of a failed print server. | [optional] 

## Example

```python
from openapi_client.models.print_server_failure_info import PrintServerFailureInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PrintServerFailureInfo from a JSON string
print_server_failure_info_instance = PrintServerFailureInfo.from_json(json)
# print the JSON string representation of the object
print(PrintServerFailureInfo.to_json())

# convert the object into a dict
print_server_failure_info_dict = print_server_failure_info_instance.to_dict()
# create an instance of PrintServerFailureInfo from a dict
print_server_failure_info_from_dict = PrintServerFailureInfo.from_dict(print_server_failure_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


