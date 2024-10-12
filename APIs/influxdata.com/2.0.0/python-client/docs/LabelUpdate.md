# LabelUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**properties** | **Dict[str, str]** | Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value. | [optional] 

## Example

```python
from openapi_client.models.label_update import LabelUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of LabelUpdate from a JSON string
label_update_instance = LabelUpdate.from_json(json)
# print the JSON string representation of the object
print(LabelUpdate.to_json())

# convert the object into a dict
label_update_dict = label_update_instance.to_dict()
# create an instance of LabelUpdate from a dict
label_update_from_dict = LabelUpdate.from_dict(label_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


