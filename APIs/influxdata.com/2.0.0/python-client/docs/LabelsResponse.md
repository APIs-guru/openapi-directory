# LabelsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | [**List[Label]**](Label.md) |  | [optional] 
**links** | [**Links**](Links.md) |  | [optional] 

## Example

```python
from openapi_client.models.labels_response import LabelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LabelsResponse from a JSON string
labels_response_instance = LabelsResponse.from_json(json)
# print the JSON string representation of the object
print(LabelsResponse.to_json())

# convert the object into a dict
labels_response_dict = labels_response_instance.to_dict()
# create an instance of LabelsResponse from a dict
labels_response_from_dict = LabelsResponse.from_dict(labels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


