# WebException


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** |  | [optional] 
**status_code** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.web_exception import WebException

# TODO update the JSON string below
json = "{}"
# create an instance of WebException from a JSON string
web_exception_instance = WebException.from_json(json)
# print the JSON string representation of the object
print(WebException.to_json())

# convert the object into a dict
web_exception_dict = web_exception_instance.to_dict()
# create an instance of WebException from a dict
web_exception_from_dict = WebException.from_dict(web_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


