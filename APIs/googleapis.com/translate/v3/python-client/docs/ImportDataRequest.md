# ImportDataRequest

Request message for ImportData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_config** | [**DatasetInputConfig**](DatasetInputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_data_request import ImportDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportDataRequest from a JSON string
import_data_request_instance = ImportDataRequest.from_json(json)
# print the JSON string representation of the object
print(ImportDataRequest.to_json())

# convert the object into a dict
import_data_request_dict = import_data_request_instance.to_dict()
# create an instance of ImportDataRequest from a dict
import_data_request_from_dict = ImportDataRequest.from_dict(import_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


