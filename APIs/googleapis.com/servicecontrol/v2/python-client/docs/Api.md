# Api

This message defines attributes associated with API operations, such as a network API request. The terminology is based on the conventions used by Google APIs, Istio, and OpenAPI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | The API operation name. For gRPC requests, it is the fully qualified API method name, such as \&quot;google.pubsub.v1.Publisher.Publish\&quot;. For OpenAPI requests, it is the &#x60;operationId&#x60;, such as \&quot;getPet\&quot;. | [optional] 
**protocol** | **str** | The API protocol used for sending the request, such as \&quot;http\&quot;, \&quot;https\&quot;, \&quot;grpc\&quot;, or \&quot;internal\&quot;. | [optional] 
**service** | **str** | The API service name. It is a logical identifier for a networked API, such as \&quot;pubsub.googleapis.com\&quot;. The naming syntax depends on the API management system being used for handling the request. | [optional] 
**version** | **str** | The API version associated with the API operation above, such as \&quot;v1\&quot; or \&quot;v1alpha1\&quot;. | [optional] 

## Example

```python
from openapi_client.models.api import Api

# TODO update the JSON string below
json = "{}"
# create an instance of Api from a JSON string
api_instance = Api.from_json(json)
# print the JSON string representation of the object
print(Api.to_json())

# convert the object into a dict
api_dict = api_instance.to_dict()
# create an instance of Api from a dict
api_from_dict = Api.from_dict(api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


