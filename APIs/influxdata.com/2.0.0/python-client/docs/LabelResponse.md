# LabelResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | [**Label**](Label.md) |  | [optional] 
**links** | [**Links**](Links.md) |  | [optional] 

## Example

```python
from openapi_client.models.label_response import LabelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LabelResponse from a JSON string
label_response_instance = LabelResponse.from_json(json)
# print the JSON string representation of the object
print(LabelResponse.to_json())

# convert the object into a dict
label_response_dict = label_response_instance.to_dict()
# create an instance of LabelResponse from a dict
label_response_from_dict = LabelResponse.from_dict(label_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


