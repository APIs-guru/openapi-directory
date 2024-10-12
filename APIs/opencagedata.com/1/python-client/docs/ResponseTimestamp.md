# ResponseTimestamp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_http** | **str** |  | [optional] 
**created_unix** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.response_timestamp import ResponseTimestamp

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseTimestamp from a JSON string
response_timestamp_instance = ResponseTimestamp.from_json(json)
# print the JSON string representation of the object
print(ResponseTimestamp.to_json())

# convert the object into a dict
response_timestamp_dict = response_timestamp_instance.to_dict()
# create an instance of ResponseTimestamp from a dict
response_timestamp_from_dict = ResponseTimestamp.from_dict(response_timestamp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


