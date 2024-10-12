# PagingInformationPaging


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** |  | 
**total** | **int** |  | 

## Example

```python
from openapi_client.models.paging_information_paging import PagingInformationPaging

# TODO update the JSON string below
json = "{}"
# create an instance of PagingInformationPaging from a JSON string
paging_information_paging_instance = PagingInformationPaging.from_json(json)
# print the JSON string representation of the object
print(PagingInformationPaging.to_json())

# convert the object into a dict
paging_information_paging_dict = paging_information_paging_instance.to_dict()
# create an instance of PagingInformationPaging from a dict
paging_information_paging_from_dict = PagingInformationPaging.from_dict(paging_information_paging_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


