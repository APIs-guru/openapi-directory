# ResponseOkTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**Template**](Template.md) |  | 

## Example

```python
from openapi_client.models.response_ok_template import ResponseOkTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseOkTemplate from a JSON string
response_ok_template_instance = ResponseOkTemplate.from_json(json)
# print the JSON string representation of the object
print(ResponseOkTemplate.to_json())

# convert the object into a dict
response_ok_template_dict = response_ok_template_instance.to_dict()
# create an instance of ResponseOkTemplate from a dict
response_ok_template_from_dict = ResponseOkTemplate.from_dict(response_ok_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


