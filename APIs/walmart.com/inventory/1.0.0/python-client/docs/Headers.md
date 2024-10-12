# Headers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | Information about the quantity in inventory | [optional] 
**offset** | **int** | Offset is the number of records you wish to skip before selecting results. | [optional] 
**total_count** | **int** | Total number of results for query. | [optional] 

## Example

```python
from openapi_client.models.headers import Headers

# TODO update the JSON string below
json = "{}"
# create an instance of Headers from a JSON string
headers_instance = Headers.from_json(json)
# print the JSON string representation of the object
print(Headers.to_json())

# convert the object into a dict
headers_dict = headers_instance.to_dict()
# create an instance of Headers from a dict
headers_from_dict = Headers.from_dict(headers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


