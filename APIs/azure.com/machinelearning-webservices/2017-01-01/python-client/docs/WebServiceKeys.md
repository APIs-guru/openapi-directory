# WebServiceKeys

Access keys for the web service calls.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **str** | The primary access key. | [optional] 
**secondary** | **str** | The secondary access key. | [optional] 

## Example

```python
from openapi_client.models.web_service_keys import WebServiceKeys

# TODO update the JSON string below
json = "{}"
# create an instance of WebServiceKeys from a JSON string
web_service_keys_instance = WebServiceKeys.from_json(json)
# print the JSON string representation of the object
print(WebServiceKeys.to_json())

# convert the object into a dict
web_service_keys_dict = web_service_keys_instance.to_dict()
# create an instance of WebServiceKeys from a dict
web_service_keys_from_dict = WebServiceKeys.from_dict(web_service_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


