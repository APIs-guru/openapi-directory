# RequestMetadata

Input only. Meta information related to the job searcher or entity conducting the job search. This information is used to improve the performance of the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_info** | [**DeviceInfo**](DeviceInfo.md) |  | [optional] 
**domain** | **str** | Required. The client-defined scope or source of the service call, which typically is the domain on which the service has been implemented and is currently being run. For example, if the service is being run by client *Foo, Inc.*, on job board www.foo.com and career site www.bar.com, then this field is set to \&quot;foo.com\&quot; for use on the job board, and \&quot;bar.com\&quot; for use on the career site. If this field isn&#39;t available for some reason, send \&quot;UNKNOWN\&quot;. Any improvements to the model for a particular tenant site rely on this field being set correctly to a domain. The maximum number of allowed characters is 255. | [optional] 
**session_id** | **str** | Required. A unique session identification string. A session is defined as the duration of an end user&#39;s interaction with the service over a certain period. Obfuscate this field for privacy concerns before providing it to the service. If this field is not available for some reason, send \&quot;UNKNOWN\&quot;. Note that any improvements to the model for a particular tenant site, rely on this field being set correctly to some unique session_id. The maximum number of allowed characters is 255. | [optional] 
**user_id** | **str** | Required. A unique user identification string, as determined by the client. To have the strongest positive impact on search quality make sure the client-level is unique. Obfuscate this field for privacy concerns before providing it to the service. If this field is not available for some reason, send \&quot;UNKNOWN\&quot;. Note that any improvements to the model for a particular tenant site, rely on this field being set correctly to a unique user_id. The maximum number of allowed characters is 255. | [optional] 

## Example

```python
from openapi_client.models.request_metadata import RequestMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of RequestMetadata from a JSON string
request_metadata_instance = RequestMetadata.from_json(json)
# print the JSON string representation of the object
print(RequestMetadata.to_json())

# convert the object into a dict
request_metadata_dict = request_metadata_instance.to_dict()
# create an instance of RequestMetadata from a dict
request_metadata_from_dict = RequestMetadata.from_dict(request_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


