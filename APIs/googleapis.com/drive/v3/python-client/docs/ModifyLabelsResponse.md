# ModifyLabelsResponse

Response to a ModifyLabels request. This contains only those labels which were added or updated by the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | This is always drive#modifyLabelsResponse | [optional] 
**modified_labels** | [**List[Label]**](Label.md) | The list of labels which were added or updated by the request. | [optional] 

## Example

```python
from openapi_client.models.modify_labels_response import ModifyLabelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyLabelsResponse from a JSON string
modify_labels_response_instance = ModifyLabelsResponse.from_json(json)
# print the JSON string representation of the object
print(ModifyLabelsResponse.to_json())

# convert the object into a dict
modify_labels_response_dict = modify_labels_response_instance.to_dict()
# create an instance of ModifyLabelsResponse from a dict
modify_labels_response_from_dict = ModifyLabelsResponse.from_dict(modify_labels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


