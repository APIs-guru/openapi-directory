# HistoryKey

Key defines all the dimensions that identify this record as unique.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form_factor** | **str** | The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned. | [optional] 
**origin** | **str** | Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data. | [optional] 
**url** | **str** | Url specifies a specific url that this record is for. This url should be normalized, following the normalization actions taken in the request to increase the chances of successful lookup. Note: When specifying a \&quot;url\&quot; only data for that specific url will be aggregated. | [optional] 

## Example

```python
from openapi_client.models.history_key import HistoryKey

# TODO update the JSON string below
json = "{}"
# create an instance of HistoryKey from a JSON string
history_key_instance = HistoryKey.from_json(json)
# print the JSON string representation of the object
print(HistoryKey.to_json())

# convert the object into a dict
history_key_dict = history_key_instance.to_dict()
# create an instance of HistoryKey from a dict
history_key_from_dict = HistoryKey.from_dict(history_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


