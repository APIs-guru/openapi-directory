# ListDimensionsResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced** | **List[str]** |  | [optional] 
**basic** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.list_dimensions_response_data import ListDimensionsResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ListDimensionsResponseData from a JSON string
list_dimensions_response_data_instance = ListDimensionsResponseData.from_json(json)
# print the JSON string representation of the object
print(ListDimensionsResponseData.to_json())

# convert the object into a dict
list_dimensions_response_data_dict = list_dimensions_response_data_instance.to_dict()
# create an instance of ListDimensionsResponseData from a dict
list_dimensions_response_data_from_dict = ListDimensionsResponseData.from_dict(list_dimensions_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


