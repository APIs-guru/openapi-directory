# File

Properties of the file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_url** | **str** | This will be returned only if the model has been archived. During job run, this won&#39;t be returned and customers can use SSH tunneling to download. Users can use Get Remote Login Information API to get the IP address and port information of all the compute nodes running the job. | 
**name** | **str** | file name | 
**properties** | [**FileProperties**](FileProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.file import File

# TODO update the JSON string below
json = "{}"
# create an instance of File from a JSON string
file_instance = File.from_json(json)
# print the JSON string representation of the object
print(File.to_json())

# convert the object into a dict
file_dict = file_instance.to_dict()
# create an instance of File from a dict
file_from_dict = File.from_dict(file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


