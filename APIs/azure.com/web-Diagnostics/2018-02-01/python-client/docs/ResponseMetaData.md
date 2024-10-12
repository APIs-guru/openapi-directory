# ResponseMetaData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | [**DataSource**](DataSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.response_meta_data import ResponseMetaData

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseMetaData from a JSON string
response_meta_data_instance = ResponseMetaData.from_json(json)
# print the JSON string representation of the object
print(ResponseMetaData.to_json())

# convert the object into a dict
response_meta_data_dict = response_meta_data_instance.to_dict()
# create an instance of ResponseMetaData from a dict
response_meta_data_from_dict = ResponseMetaData.from_dict(response_meta_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


