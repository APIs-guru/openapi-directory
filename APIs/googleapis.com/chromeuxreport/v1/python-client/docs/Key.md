# Key

Key defines all the dimensions that identify this record as unique.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_connection_type** | **str** | The effective connection type is the general connection class that all users experienced for this record. This field uses the values [\&quot;offline\&quot;, \&quot;slow-2G\&quot;, \&quot;2G\&quot;, \&quot;3G\&quot;, \&quot;4G\&quot;] as specified in: https://wicg.github.io/netinfo/#effective-connection-types If the effective connection type is unspecified, then aggregated data over all effective connection types will be returned. | [optional] 
**form_factor** | **str** | The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned. | [optional] 
**origin** | **str** | Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data. | [optional] 
**url** | **str** | Url specifies a specific url that this record is for. Note: When specifying a \&quot;url\&quot; only data for that specific url will be aggregated. | [optional] 

## Example

```python
from openapi_client.models.key import Key

# TODO update the JSON string below
json = "{}"
# create an instance of Key from a JSON string
key_instance = Key.from_json(json)
# print the JSON string representation of the object
print(Key.to_json())

# convert the object into a dict
key_dict = key_instance.to_dict()
# create an instance of Key from a dict
key_from_dict = Key.from_dict(key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


