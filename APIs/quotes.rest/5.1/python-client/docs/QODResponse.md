# QODResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | [**QODResponseContents**](QODResponseContents.md) |  | [optional] 
**success** | **str** | Metadata about this successful call | [optional] 

## Example

```python
from openapi_client.models.qod_response import QODResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QODResponse from a JSON string
qod_response_instance = QODResponse.from_json(json)
# print the JSON string representation of the object
print(QODResponse.to_json())

# convert the object into a dict
qod_response_dict = qod_response_instance.to_dict()
# create an instance of QODResponse from a dict
qod_response_from_dict = QODResponse.from_dict(qod_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


