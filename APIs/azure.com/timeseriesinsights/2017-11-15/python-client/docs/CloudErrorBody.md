# CloudErrorBody

Describes a particular API error with an error code and a message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | An error code that describes the error condition more precisely than an HTTP status code. Can be used to programmatically handle specific error cases. | [optional] 
**details** | [**List[CloudErrorBody]**](CloudErrorBody.md) | Contains nested errors that are related to this error. | [optional] 
**message** | **str** | A message that describes the error in detail and provides debugging information. | [optional] 
**target** | **str** | The target of the particular error (for example, the name of the property in error). | [optional] 

## Example

```python
from openapi_client.models.cloud_error_body import CloudErrorBody

# TODO update the JSON string below
json = "{}"
# create an instance of CloudErrorBody from a JSON string
cloud_error_body_instance = CloudErrorBody.from_json(json)
# print the JSON string representation of the object
print(CloudErrorBody.to_json())

# convert the object into a dict
cloud_error_body_dict = cloud_error_body_instance.to_dict()
# create an instance of CloudErrorBody from a dict
cloud_error_body_from_dict = CloudErrorBody.from_dict(cloud_error_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


