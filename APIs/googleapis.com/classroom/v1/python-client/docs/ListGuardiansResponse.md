# ListGuardiansResponse

Response when listing guardians.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guardians** | [**List[Guardian]**](Guardian.md) | Guardians on this page of results that met the criteria specified in the request. | [optional] 
**next_page_token** | **str** | Token identifying the next page of results to return. If empty, no further results are available. | [optional] 

## Example

```python
from openapi_client.models.list_guardians_response import ListGuardiansResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGuardiansResponse from a JSON string
list_guardians_response_instance = ListGuardiansResponse.from_json(json)
# print the JSON string representation of the object
print(ListGuardiansResponse.to_json())

# convert the object into a dict
list_guardians_response_dict = list_guardians_response_instance.to_dict()
# create an instance of ListGuardiansResponse from a dict
list_guardians_response_from_dict = ListGuardiansResponse.from_dict(list_guardians_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


