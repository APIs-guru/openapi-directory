# PagingInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paging** | [**PagingInformationPaging**](PagingInformationPaging.md) |  | 

## Example

```python
from openapi_client.models.paging_information import PagingInformation

# TODO update the JSON string below
json = "{}"
# create an instance of PagingInformation from a JSON string
paging_information_instance = PagingInformation.from_json(json)
# print the JSON string representation of the object
print(PagingInformation.to_json())

# convert the object into a dict
paging_information_dict = paging_information_instance.to_dict()
# create an instance of PagingInformation from a dict
paging_information_from_dict = PagingInformation.from_dict(paging_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


