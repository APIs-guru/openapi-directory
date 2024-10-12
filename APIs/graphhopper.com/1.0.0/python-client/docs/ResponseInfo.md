# ResponseInfo

Additional information for your request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copyrights** | **List[str]** | Attribution according to our documentation is necessary if no white-label option included. | [optional] 
**took** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.response_info import ResponseInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseInfo from a JSON string
response_info_instance = ResponseInfo.from_json(json)
# print the JSON string representation of the object
print(ResponseInfo.to_json())

# convert the object into a dict
response_info_dict = response_info_instance.to_dict()
# create an instance of ResponseInfo from a dict
response_info_from_dict = ResponseInfo.from_dict(response_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


