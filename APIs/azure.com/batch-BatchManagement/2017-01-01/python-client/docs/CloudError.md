# CloudError

An error response from the Batch service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | An identifier for the error. Codes are invariant and are intended to be consumed programmatically. | [optional] 
**details** | [**List[CloudError]**](CloudError.md) | A list of additional details about the error. | [optional] 
**message** | **str** | A message describing the error, intended to be suitable for display in a user interface. | [optional] 
**target** | **str** | The target of the particular error. For example, the name of the property in error. | [optional] 

## Example

```python
from openapi_client.models.cloud_error import CloudError

# TODO update the JSON string below
json = "{}"
# create an instance of CloudError from a JSON string
cloud_error_instance = CloudError.from_json(json)
# print the JSON string representation of the object
print(CloudError.to_json())

# convert the object into a dict
cloud_error_dict = cloud_error_instance.to_dict()
# create an instance of CloudError from a dict
cloud_error_from_dict = CloudError.from_dict(cloud_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


