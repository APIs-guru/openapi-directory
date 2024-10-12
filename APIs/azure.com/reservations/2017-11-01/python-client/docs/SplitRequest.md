# SplitRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SplitProperties**](SplitProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.split_request import SplitRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SplitRequest from a JSON string
split_request_instance = SplitRequest.from_json(json)
# print the JSON string representation of the object
print(SplitRequest.to_json())

# convert the object into a dict
split_request_dict = split_request_instance.to_dict()
# create an instance of SplitRequest from a dict
split_request_from_dict = SplitRequest.from_dict(split_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


