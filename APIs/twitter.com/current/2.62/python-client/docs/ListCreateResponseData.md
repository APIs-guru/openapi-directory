# ListCreateResponseData

A Twitter List is a curated group of accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of this List. | 
**name** | **str** | The name of this List. | 

## Example

```python
from openapi_client.models.list_create_response_data import ListCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ListCreateResponseData from a JSON string
list_create_response_data_instance = ListCreateResponseData.from_json(json)
# print the JSON string representation of the object
print(ListCreateResponseData.to_json())

# convert the object into a dict
list_create_response_data_dict = list_create_response_data_instance.to_dict()
# create an instance of ListCreateResponseData from a dict
list_create_response_data_from_dict = ListCreateResponseData.from_dict(list_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


