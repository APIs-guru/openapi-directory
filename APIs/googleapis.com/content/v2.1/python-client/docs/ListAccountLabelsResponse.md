# ListAccountLabelsResponse

Response message for the `ListAccountLabels` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_labels** | [**List[AccountLabel]**](AccountLabel.md) | The labels from the specified account. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_account_labels_response import ListAccountLabelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAccountLabelsResponse from a JSON string
list_account_labels_response_instance = ListAccountLabelsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAccountLabelsResponse.to_json())

# convert the object into a dict
list_account_labels_response_dict = list_account_labels_response_instance.to_dict()
# create an instance of ListAccountLabelsResponse from a dict
list_account_labels_response_from_dict = ListAccountLabelsResponse.from_dict(list_account_labels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


