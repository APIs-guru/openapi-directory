# QnADTO

Q-A object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | **str** | Answer text | 
**context** | [**ContextDTO**](ContextDTO.md) | Context of a QnA | [optional] 
**id** | **int** | Unique id for the Q-A. | [optional] 
**metadata** | [**List[MetadataDTO]**](MetadataDTO.md) | List of metadata associated with the answer. | [optional] 
**questions** | **List[str]** | List of questions associated with the answer. | 
**source** | **str** | Source from which Q-A was indexed. eg. https://docs.microsoft.com/en-us/azure/cognitive-services/QnAMaker/FAQs | [optional] 

## Example

```python
from openapi_client.models.qn_adto import QnADTO

# TODO update the JSON string below
json = "{}"
# create an instance of QnADTO from a JSON string
qn_adto_instance = QnADTO.from_json(json)
# print the JSON string representation of the object
print(QnADTO.to_json())

# convert the object into a dict
qn_adto_dict = qn_adto_instance.to_dict()
# create an instance of QnADTO from a dict
qn_adto_from_dict = QnADTO.from_dict(qn_adto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


