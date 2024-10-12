# SystemStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment_text** | **str** | Comment regarding the status of the system. | [optional] 
**last_status_date_time** | **str** | Date and time the status of the system was last updated. Format - YYYY-MM-DDThh:mm:ssTZD . | [optional] 

## Example

```python
from openapi_client.models.system_status_response import SystemStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SystemStatusResponse from a JSON string
system_status_response_instance = SystemStatusResponse.from_json(json)
# print the JSON string representation of the object
print(SystemStatusResponse.to_json())

# convert the object into a dict
system_status_response_dict = system_status_response_instance.to_dict()
# create an instance of SystemStatusResponse from a dict
system_status_response_from_dict = SystemStatusResponse.from_dict(system_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


