# ResponseParameters

Contains information about why a request was unsuccessful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migrate_to_chat_id** | **int** | *Optional*. The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. | [optional] 
**retry_after** | **int** | *Optional*. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated | [optional] 

## Example

```python
from openapi_client.models.response_parameters import ResponseParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseParameters from a JSON string
response_parameters_instance = ResponseParameters.from_json(json)
# print the JSON string representation of the object
print(ResponseParameters.to_json())

# convert the object into a dict
response_parameters_dict = response_parameters_instance.to_dict()
# create an instance of ResponseParameters from a dict
response_parameters_from_dict = ResponseParameters.from_dict(response_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


