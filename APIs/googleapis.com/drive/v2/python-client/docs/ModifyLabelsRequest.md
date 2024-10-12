# ModifyLabelsRequest

A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail atomically.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | This is always &#x60;drive#modifyLabelsRequest&#x60;. | [optional] [default to 'drive#modifyLabelsRequest']
**label_modifications** | [**List[LabelModification]**](LabelModification.md) | The list of modifications to apply to the labels on the file. | [optional] 

## Example

```python
from openapi_client.models.modify_labels_request import ModifyLabelsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyLabelsRequest from a JSON string
modify_labels_request_instance = ModifyLabelsRequest.from_json(json)
# print the JSON string representation of the object
print(ModifyLabelsRequest.to_json())

# convert the object into a dict
modify_labels_request_dict = modify_labels_request_instance.to_dict()
# create an instance of ModifyLabelsRequest from a dict
modify_labels_request_from_dict = ModifyLabelsRequest.from_dict(modify_labels_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


