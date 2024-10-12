# ListCustomClassesResponse

Message returned to the client by the `ListCustomClasses` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_classes** | [**List[CustomClass]**](CustomClass.md) | The custom classes. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_custom_classes_response import ListCustomClassesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomClassesResponse from a JSON string
list_custom_classes_response_instance = ListCustomClassesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCustomClassesResponse.to_json())

# convert the object into a dict
list_custom_classes_response_dict = list_custom_classes_response_instance.to_dict()
# create an instance of ListCustomClassesResponse from a dict
list_custom_classes_response_from_dict = ListCustomClassesResponse.from_dict(list_custom_classes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


