# LabelListResult

The result of a list request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next set of paged results. | [optional] 
**items** | [**List[Label]**](Label.md) | The collection value. | [optional] 

## Example

```python
from openapi_client.models.label_list_result import LabelListResult

# TODO update the JSON string below
json = "{}"
# create an instance of LabelListResult from a JSON string
label_list_result_instance = LabelListResult.from_json(json)
# print the JSON string representation of the object
print(LabelListResult.to_json())

# convert the object into a dict
label_list_result_dict = label_list_result_instance.to_dict()
# create an instance of LabelListResult from a dict
label_list_result_from_dict = LabelListResult.from_dict(label_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


