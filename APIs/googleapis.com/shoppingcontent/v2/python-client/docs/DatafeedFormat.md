# DatafeedFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_delimiter** | **str** | Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - \&quot;&#x60;pipe&#x60;\&quot; - \&quot;&#x60;tab&#x60;\&quot; - \&quot;&#x60;tilde&#x60;\&quot;  | [optional] 
**file_encoding** | **str** | Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected. Acceptable values are: - \&quot;&#x60;latin-1&#x60;\&quot; - \&quot;&#x60;utf-16be&#x60;\&quot; - \&quot;&#x60;utf-16le&#x60;\&quot; - \&quot;&#x60;utf-8&#x60;\&quot; - \&quot;&#x60;windows-1252&#x60;\&quot;  | [optional] 
**quoting_mode** | **str** | Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - \&quot;&#x60;normal character&#x60;\&quot; - \&quot;&#x60;value quoting&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.datafeed_format import DatafeedFormat

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedFormat from a JSON string
datafeed_format_instance = DatafeedFormat.from_json(json)
# print the JSON string representation of the object
print(DatafeedFormat.to_json())

# convert the object into a dict
datafeed_format_dict = datafeed_format_instance.to_dict()
# create an instance of DatafeedFormat from a dict
datafeed_format_from_dict = DatafeedFormat.from_dict(datafeed_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


