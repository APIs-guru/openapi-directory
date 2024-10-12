# AdlsRemoteException

Data Lake Store filesystem exception based on the WebHDFS definition for RemoteExceptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exception** | **str** | the class name of the exception thrown, such as &#39;IllegalArgumentException&#39;. | [readonly] 
**java_class_name** | **str** | the full class package name for the exception thrown, such as &#39;java.lang.IllegalArgumentException&#39;. | [optional] [readonly] 
**message** | **str** | the message associated with the exception that was thrown, such as &#39;Invalid value for webhdfs parameter \&quot;permission\&quot;:...&#39;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.adls_remote_exception import AdlsRemoteException

# TODO update the JSON string below
json = "{}"
# create an instance of AdlsRemoteException from a JSON string
adls_remote_exception_instance = AdlsRemoteException.from_json(json)
# print the JSON string representation of the object
print(AdlsRemoteException.to_json())

# convert the object into a dict
adls_remote_exception_dict = adls_remote_exception_instance.to_dict()
# create an instance of AdlsRemoteException from a dict
adls_remote_exception_from_dict = AdlsRemoteException.from_dict(adls_remote_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


