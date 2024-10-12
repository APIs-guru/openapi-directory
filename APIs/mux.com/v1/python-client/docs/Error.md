# Error


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | The error code | [optional] 
**count** | **int** | The total number of views that experiend this error. | [optional] 
**description** | **str** | Description of the error. | [optional] 
**id** | **int** | A unique identifier for this error. | [optional] 
**last_seen** | **str** | The last time this error was seen (ISO 8601 timestamp). | [optional] 
**message** | **str** | The error message. | [optional] 
**notes** | **str** | Notes that are attached to this error. | [optional] 
**percentage** | **float** | The percentage of views that experienced this error. | [optional] 

## Example

```python
from openapi_client.models.error import Error

# TODO update the JSON string below
json = "{}"
# create an instance of Error from a JSON string
error_instance = Error.from_json(json)
# print the JSON string representation of the object
print(Error.to_json())

# convert the object into a dict
error_dict = error_instance.to_dict()
# create an instance of Error from a dict
error_from_dict = Error.from_dict(error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


