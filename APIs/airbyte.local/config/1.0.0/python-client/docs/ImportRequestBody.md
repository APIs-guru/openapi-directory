# ImportRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** |  | 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.import_request_body import ImportRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ImportRequestBody from a JSON string
import_request_body_instance = ImportRequestBody.from_json(json)
# print the JSON string representation of the object
print(ImportRequestBody.to_json())

# convert the object into a dict
import_request_body_dict = import_request_body_instance.to_dict()
# create an instance of ImportRequestBody from a dict
import_request_body_from_dict = ImportRequestBody.from_dict(import_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


