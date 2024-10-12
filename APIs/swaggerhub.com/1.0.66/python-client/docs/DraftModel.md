# DraftModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | [**List[ClosableComment]**](ClosableComment.md) |  | [optional] 
**yaml** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.draft_model import DraftModel

# TODO update the JSON string below
json = "{}"
# create an instance of DraftModel from a JSON string
draft_model_instance = DraftModel.from_json(json)
# print the JSON string representation of the object
print(DraftModel.to_json())

# convert the object into a dict
draft_model_dict = draft_model_instance.to_dict()
# create an instance of DraftModel from a dict
draft_model_from_dict = DraftModel.from_dict(draft_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


