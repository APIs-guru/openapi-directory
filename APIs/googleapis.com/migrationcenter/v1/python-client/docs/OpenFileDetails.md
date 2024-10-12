# OpenFileDetails

Open file Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** | Opened file command. | [optional] 
**file_path** | **str** | Opened file file path. | [optional] 
**file_type** | **str** | Opened file file type. | [optional] 
**user** | **str** | Opened file user. | [optional] 

## Example

```python
from openapi_client.models.open_file_details import OpenFileDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OpenFileDetails from a JSON string
open_file_details_instance = OpenFileDetails.from_json(json)
# print the JSON string representation of the object
print(OpenFileDetails.to_json())

# convert the object into a dict
open_file_details_dict = open_file_details_instance.to_dict()
# create an instance of OpenFileDetails from a dict
open_file_details_from_dict = OpenFileDetails.from_dict(open_file_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


