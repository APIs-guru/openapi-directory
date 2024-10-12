# PathRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**antenna** | [**Antenna**](Antenna.md) |  | [optional] 
**environment** | [**Environment**](Environment.md) |  | [optional] 
**model** | [**Model**](Model.md) |  | [optional] 
**network** | **str** | Network name/group | [optional] [default to 'Testing']
**output** | [**Output**](Output.md) |  | [optional] 
**receiver** | [**Receiver**](Receiver.md) |  | [optional] 
**site** | **str** | Site name | [optional] [default to 'Link']
**transmitter** | [**Transmitter**](Transmitter.md) |  | [optional] 

## Example

```python
from openapi_client.models.path_request import PathRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PathRequest from a JSON string
path_request_instance = PathRequest.from_json(json)
# print the JSON string representation of the object
print(PathRequest.to_json())

# convert the object into a dict
path_request_dict = path_request_instance.to_dict()
# create an instance of PathRequest from a dict
path_request_from_dict = PathRequest.from_dict(path_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


