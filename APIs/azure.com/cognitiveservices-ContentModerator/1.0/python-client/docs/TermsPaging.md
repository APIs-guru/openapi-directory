# TermsPaging

Paging details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | Limit details. | [optional] 
**offset** | **int** | Offset details. | [optional] 
**returned** | **int** | Returned text details. | [optional] 
**total** | **int** | Total details. | [optional] 

## Example

```python
from openapi_client.models.terms_paging import TermsPaging

# TODO update the JSON string below
json = "{}"
# create an instance of TermsPaging from a JSON string
terms_paging_instance = TermsPaging.from_json(json)
# print the JSON string representation of the object
print(TermsPaging.to_json())

# convert the object into a dict
terms_paging_dict = terms_paging_instance.to_dict()
# create an instance of TermsPaging from a dict
terms_paging_from_dict = TermsPaging.from_dict(terms_paging_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


