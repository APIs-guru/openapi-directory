# CheckConnectionRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_info** | [**SynchronousJobRead**](SynchronousJobRead.md) |  | 
**message** | **str** |  | [optional] 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.check_connection_read import CheckConnectionRead

# TODO update the JSON string below
json = "{}"
# create an instance of CheckConnectionRead from a JSON string
check_connection_read_instance = CheckConnectionRead.from_json(json)
# print the JSON string representation of the object
print(CheckConnectionRead.to_json())

# convert the object into a dict
check_connection_read_dict = check_connection_read_instance.to_dict()
# create an instance of CheckConnectionRead from a dict
check_connection_read_from_dict = CheckConnectionRead.from_dict(check_connection_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


