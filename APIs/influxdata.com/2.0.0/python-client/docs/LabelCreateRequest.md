# LabelCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**org_id** | **str** |  | 
**properties** | **Dict[str, str]** | Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value. | [optional] 

## Example

```python
from openapi_client.models.label_create_request import LabelCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LabelCreateRequest from a JSON string
label_create_request_instance = LabelCreateRequest.from_json(json)
# print the JSON string representation of the object
print(LabelCreateRequest.to_json())

# convert the object into a dict
label_create_request_dict = label_create_request_instance.to_dict()
# create an instance of LabelCreateRequest from a dict
label_create_request_from_dict = LabelCreateRequest.from_dict(label_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


