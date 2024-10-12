# ListLabelsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | [**List[Label]**](Label.md) | List of labels. Note that each label resource only contains an &#x60;id&#x60;, &#x60;name&#x60;, &#x60;messageListVisibility&#x60;, &#x60;labelListVisibility&#x60;, and &#x60;type&#x60;. The labels.get method can fetch additional label details. | [optional] 

## Example

```python
from openapi_client.models.list_labels_response import ListLabelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLabelsResponse from a JSON string
list_labels_response_instance = ListLabelsResponse.from_json(json)
# print the JSON string representation of the object
print(ListLabelsResponse.to_json())

# convert the object into a dict
list_labels_response_dict = list_labels_response_instance.to_dict()
# create an instance of ListLabelsResponse from a dict
list_labels_response_from_dict = ListLabelsResponse.from_dict(list_labels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


