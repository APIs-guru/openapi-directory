# VoidLabelResponseBody

A void label response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **bool** | Indicates whether the attempt to void the label was successful | [readonly] 
**message** | **str** |  | [readonly] 

## Example

```python
from openapi_client.models.void_label_response_body import VoidLabelResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of VoidLabelResponseBody from a JSON string
void_label_response_body_instance = VoidLabelResponseBody.from_json(json)
# print the JSON string representation of the object
print(VoidLabelResponseBody.to_json())

# convert the object into a dict
void_label_response_body_dict = void_label_response_body_instance.to_dict()
# create an instance of VoidLabelResponseBody from a dict
void_label_response_body_from_dict = VoidLabelResponseBody.from_dict(void_label_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


