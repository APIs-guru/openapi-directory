# GenericLogContainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exceeded_max_limit** | **bool** | indicates if the number of available logs are more than the max allowed return limit(100). | [optional] 
**last_received_log_timestamp** | **datetime** | the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call. | [optional] 
**logs** | [**List[CrashesListSessionLogs200ResponseLogsInner]**](CrashesListSessionLogs200ResponseLogsInner.md) | the list of logs | 

## Example

```python
from openapi_client.models.generic_log_container import GenericLogContainer

# TODO update the JSON string below
json = "{}"
# create an instance of GenericLogContainer from a JSON string
generic_log_container_instance = GenericLogContainer.from_json(json)
# print the JSON string representation of the object
print(GenericLogContainer.to_json())

# convert the object into a dict
generic_log_container_dict = generic_log_container_instance.to_dict()
# create an instance of GenericLogContainer from a dict
generic_log_container_from_dict = GenericLogContainer.from_dict(generic_log_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


