# LabelList

A list of labels applied to a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Label]**](Label.md) | The list of labels. | [optional] 
**kind** | **str** | This is always &#x60;drive#labelList&#x60; | [optional] [default to 'drive#labelList']
**next_page_token** | **str** | The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. | [optional] 

## Example

```python
from openapi_client.models.label_list import LabelList

# TODO update the JSON string below
json = "{}"
# create an instance of LabelList from a JSON string
label_list_instance = LabelList.from_json(json)
# print the JSON string representation of the object
print(LabelList.to_json())

# convert the object into a dict
label_list_dict = label_list_instance.to_dict()
# create an instance of LabelList from a dict
label_list_from_dict = LabelList.from_dict(label_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


