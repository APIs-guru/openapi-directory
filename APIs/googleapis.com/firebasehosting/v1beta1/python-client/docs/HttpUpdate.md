# HttpUpdate

A file you can add to your existing, non-Hosting hosting service that confirms your intent to allow Hosting's Certificate Authorities to create an SSL certificate for your domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_error** | [**Status**](Status.md) |  | [optional] 
**desired** | **str** | Output only. A text string to serve at the path. | [optional] [readonly] 
**discovered** | **str** | Output only. Whether Hosting was able to find the required file contents on the specified path during its last check. | [optional] [readonly] 
**last_check_time** | **str** | Output only. The last time Hosting systems checked for the file contents. | [optional] [readonly] 
**path** | **str** | Output only. The path to the file. | [optional] [readonly] 

## Example

```python
from openapi_client.models.http_update import HttpUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of HttpUpdate from a JSON string
http_update_instance = HttpUpdate.from_json(json)
# print the JSON string representation of the object
print(HttpUpdate.to_json())

# convert the object into a dict
http_update_dict = http_update_instance.to_dict()
# create an instance of HttpUpdate from a dict
http_update_from_dict = HttpUpdate.from_dict(http_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


