# XPSTablesPreprocessResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tables_dataset_metadata** | [**XPSTablesDatasetMetadata**](XPSTablesDatasetMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_tables_preprocess_response import XPSTablesPreprocessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTablesPreprocessResponse from a JSON string
xps_tables_preprocess_response_instance = XPSTablesPreprocessResponse.from_json(json)
# print the JSON string representation of the object
print(XPSTablesPreprocessResponse.to_json())

# convert the object into a dict
xps_tables_preprocess_response_dict = xps_tables_preprocess_response_instance.to_dict()
# create an instance of XPSTablesPreprocessResponse from a dict
xps_tables_preprocess_response_from_dict = XPSTablesPreprocessResponse.from_dict(xps_tables_preprocess_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


