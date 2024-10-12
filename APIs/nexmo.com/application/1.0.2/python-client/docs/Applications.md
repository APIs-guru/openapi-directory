# Applications


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**ApplicationsBaseEmbedded**](ApplicationsBaseEmbedded.md) |  | 
**links** | [**Links**](Links.md) |  | 
**count** | **int** | The number of items associated with your account. | 
**page_index** | **int** | The offset from the first page. | 
**page_size** | **int** | The number of items returned on each call to this endpoint. The default is 10 records. | 

## Example

```python
from openapi_client.models.applications import Applications

# TODO update the JSON string below
json = "{}"
# create an instance of Applications from a JSON string
applications_instance = Applications.from_json(json)
# print the JSON string representation of the object
print(Applications.to_json())

# convert the object into a dict
applications_dict = applications_instance.to_dict()
# create an instance of Applications from a dict
applications_from_dict = Applications.from_dict(applications_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


