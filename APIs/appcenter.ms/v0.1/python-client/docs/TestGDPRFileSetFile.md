# TestGDPRFileSetFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_upload_id** | **str** |  | [optional] 
**hash_file_id** | **str** |  | [optional] 
**hash_file_url** | **str** |  | [optional] 
**path** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.test_gdpr_file_set_file import TestGDPRFileSetFile

# TODO update the JSON string below
json = "{}"
# create an instance of TestGDPRFileSetFile from a JSON string
test_gdpr_file_set_file_instance = TestGDPRFileSetFile.from_json(json)
# print the JSON string representation of the object
print(TestGDPRFileSetFile.to_json())

# convert the object into a dict
test_gdpr_file_set_file_dict = test_gdpr_file_set_file_instance.to_dict()
# create an instance of TestGDPRFileSetFile from a dict
test_gdpr_file_set_file_from_dict = TestGDPRFileSetFile.from_dict(test_gdpr_file_set_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


