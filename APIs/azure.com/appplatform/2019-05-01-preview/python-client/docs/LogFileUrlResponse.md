# LogFileUrlResponse

Log file URL payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | URL of the log file | 

## Example

```python
from openapi_client.models.log_file_url_response import LogFileUrlResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LogFileUrlResponse from a JSON string
log_file_url_response_instance = LogFileUrlResponse.from_json(json)
# print the JSON string representation of the object
print(LogFileUrlResponse.to_json())

# convert the object into a dict
log_file_url_response_dict = log_file_url_response_instance.to_dict()
# create an instance of LogFileUrlResponse from a dict
log_file_url_response_from_dict = LogFileUrlResponse.from_dict(log_file_url_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


