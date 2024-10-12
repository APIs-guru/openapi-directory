# RequestList

Defines a sub-list to append to an existing list entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_form** | **str** | The canonical form of the sub-list. | 
**name** | **str** | The name of the sub-list. | [optional] 
**synonyms** | **List[str]** | The synonyms of the canonical form. | [optional] 

## Example

```python
from openapi_client.models.request_list import RequestList

# TODO update the JSON string below
json = "{}"
# create an instance of RequestList from a JSON string
request_list_instance = RequestList.from_json(json)
# print the JSON string representation of the object
print(RequestList.to_json())

# convert the object into a dict
request_list_dict = request_list_instance.to_dict()
# create an instance of RequestList from a dict
request_list_from_dict = RequestList.from_dict(request_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


