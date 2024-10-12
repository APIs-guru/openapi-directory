# HttpErrorRangeParameters

The JSON object that represents the range for http status codes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begin** | **int** | The inclusive start of the http status code range. | [optional] 
**end** | **int** | The inclusive end of the http status code range. | [optional] 

## Example

```python
from openapi_client.models.http_error_range_parameters import HttpErrorRangeParameters

# TODO update the JSON string below
json = "{}"
# create an instance of HttpErrorRangeParameters from a JSON string
http_error_range_parameters_instance = HttpErrorRangeParameters.from_json(json)
# print the JSON string representation of the object
print(HttpErrorRangeParameters.to_json())

# convert the object into a dict
http_error_range_parameters_dict = http_error_range_parameters_instance.to_dict()
# create an instance of HttpErrorRangeParameters from a dict
http_error_range_parameters_from_dict = HttpErrorRangeParameters.from_dict(http_error_range_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


