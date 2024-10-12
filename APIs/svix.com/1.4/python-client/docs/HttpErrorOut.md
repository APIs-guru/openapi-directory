# HttpErrorOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 
**detail** | **str** |  | 

## Example

```python
from openapi_client.models.http_error_out import HttpErrorOut

# TODO update the JSON string below
json = "{}"
# create an instance of HttpErrorOut from a JSON string
http_error_out_instance = HttpErrorOut.from_json(json)
# print the JSON string representation of the object
print(HttpErrorOut.to_json())

# convert the object into a dict
http_error_out_dict = http_error_out_instance.to_dict()
# create an instance of HttpErrorOut from a dict
http_error_out_from_dict = HttpErrorOut.from_dict(http_error_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


