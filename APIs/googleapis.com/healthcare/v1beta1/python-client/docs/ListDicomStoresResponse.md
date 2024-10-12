# ListDicomStoresResponse

Lists the DICOM stores in the given dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dicom_stores** | [**List[DicomStore]**](DicomStore.md) | The returned DICOM stores. Won&#39;t be more DICOM stores than the value of page_size in the request. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_dicom_stores_response import ListDicomStoresResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDicomStoresResponse from a JSON string
list_dicom_stores_response_instance = ListDicomStoresResponse.from_json(json)
# print the JSON string representation of the object
print(ListDicomStoresResponse.to_json())

# convert the object into a dict
list_dicom_stores_response_dict = list_dicom_stores_response_instance.to_dict()
# create an instance of ListDicomStoresResponse from a dict
list_dicom_stores_response_from_dict = ListDicomStoresResponse.from_dict(list_dicom_stores_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


