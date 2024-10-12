# ApplicationsBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**ApplicationsBaseEmbedded**](ApplicationsBaseEmbedded.md) |  | [optional] 
**count** | **int** | The number of items associated with your account. | [optional] 
**page_index** | **int** | The offset from the first page. | [optional] 
**page_size** | **int** | The number of items returned on each call to this endpoint. The default is 10 records. | [optional] 

## Example

```python
from openapi_client.models.applications_base import ApplicationsBase

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationsBase from a JSON string
applications_base_instance = ApplicationsBase.from_json(json)
# print the JSON string representation of the object
print(ApplicationsBase.to_json())

# convert the object into a dict
applications_base_dict = applications_base_instance.to_dict()
# create an instance of ApplicationsBase from a dict
applications_base_from_dict = ApplicationsBase.from_dict(applications_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


