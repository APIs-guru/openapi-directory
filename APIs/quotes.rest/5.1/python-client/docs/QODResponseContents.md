# QODResponseContents


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quotes** | [**List[QOD]**](QOD.md) | List of quotes | [optional] 

## Example

```python
from openapi_client.models.qod_response_contents import QODResponseContents

# TODO update the JSON string below
json = "{}"
# create an instance of QODResponseContents from a JSON string
qod_response_contents_instance = QODResponseContents.from_json(json)
# print the JSON string representation of the object
print(QODResponseContents.to_json())

# convert the object into a dict
qod_response_contents_dict = qod_response_contents_instance.to_dict()
# create an instance of QODResponseContents from a dict
qod_response_contents_from_dict = QODResponseContents.from_dict(qod_response_contents_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


